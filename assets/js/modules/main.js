/**
 * Portfolio entry point
 * Note: skillCategories, projects, socialLinks, renderSkills, renderProjects,
 * and renderSocialLinks are plain global scripts loaded before this file in
 * index.html (see <script> order), not ES modules — this lets the page run
 * by double-clicking index.html directly, with no local server required.
 */

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusEl = document.getElementById('contact-status');
  const emailContact = socialLinks.find((s) => s.id === 'email');
  const recipient = emailContact ? emailContact.value : '';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    if (statusEl) {
      statusEl.textContent = 'Opening your email app to send this message…';
      statusEl.classList.remove('hidden');
    }
  });
}

function init() {
  renderSkills(document.getElementById('skills-grid'), skillCategories);
  renderProjects(document.getElementById('projects-grid'), projects);
  renderSocialLinks(document.getElementById('social-links'), socialLinks);
  initContactForm();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);