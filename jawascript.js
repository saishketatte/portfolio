document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section.section');
  const modeToggleBtn = document.getElementById('mode-toggle');
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');
  const body = document.body;

  function showSection(id) {
    sections.forEach(section => {
      section.classList.toggle('hidden', section.id !== id);
    });
  }

  showSection('about');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      showSection(targetId);
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      navUl.classList.remove('show');
    });
  });

  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });

  function setMode(mode) {
    if (mode === 'dark') {
      body.removeAttribute('data-theme');
      modeToggleBtn.textContent = '🌙';
    } else {
      body.setAttribute('data-theme', 'light');
      modeToggleBtn.textContent = '☀️';
    }
  }

  let currentMode = localStorage.getItem('mode') || 'dark';
  setMode(currentMode);

  modeToggleBtn.addEventListener('click', () => {
    currentMode = body.hasAttribute('data-theme') ? 'dark' : 'light';
    setMode(currentMode);
    localStorage.setItem('mode', currentMode);
  });

  const typewriterText = "Coder • District Table Tennis Winner • Fun to be around";
  const typewriterEl = document.getElementById('typewriter');
  let i = 0;

  function typeWriter() {
    if (i <= typewriterText.length) {
      typewriterEl.textContent = typewriterText.substring(0, i++);
      setTimeout(typeWriter, 60);
    }
  }

  typeWriter();
});
