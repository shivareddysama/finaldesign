document.addEventListener('DOMContentLoaded', () => {
  // Modal functionality with ARIA attributes
  const modal = document.getElementById('communityModal');
  const closeModal = document.getElementById('closeModal');

  document.querySelectorAll('.openModal').forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'block';
      modal.setAttribute('aria-hidden', 'false');
      closeModal.focus();
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });

  // Dynamic form fields
  const topicSelect = document.getElementById('topic');
  const eventDetails = document.getElementById('eventDetails');

  topicSelect.addEventListener('change', () => {
    if (topicSelect.value === 'speakers') {
      eventDetails.style.display = 'block';
    } else {
      eventDetails.style.display = 'none';
    }
  });

  // Switch functionality
  const emailSwitch = document.getElementById('emailSwitch');
  emailSwitch.addEventListener('click', () => {
    const isChecked = emailSwitch.getAttribute('aria-checked') === 'true';
    emailSwitch.setAttribute('aria-checked', !isChecked);
    emailSwitch.textContent = isChecked ? 'OFF' : 'ON';
  });

  // Enhanced form submission
  const form = document.getElementById('scheduleForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const businessName = document.getElementById('businessName').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!businessName || !email) {
      alert('Please fill out all required fields.');
    } else {
      alert('Thank you! We will contact you soon.');
    }
  });

  // Dynamic page titles
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const sectionId = link.getAttribute('href').substring(1);
      document.title = `Empower Ability Labs - ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
    });
  });

  // Back button handling
  window.addEventListener('popstate', (e) => {
    const sectionId = e.state ? e.state.section : 'home';
    document.getElementById(sectionId).scrollIntoView();
    document.title = `Empower Ability Labs - ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const sectionId = link.getAttribute('href').substring(1);
      history.pushState({ section: sectionId }, '', `#${sectionId}`);
    });
  });
});
