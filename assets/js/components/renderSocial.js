/**
 * Render contact social pills
 */
function renderSocialLinks(container, links) {
  if (!container) return;

  container.innerHTML = links
    .map(
      (link) => `
      <li>
        <a href="${link.href}" class="social-pill" ${link.id !== 'email' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          ${link.icon}
          ${link.label}
        </a>
      </li>`
    )
    .join('');
}