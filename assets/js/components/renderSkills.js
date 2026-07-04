/**
 * Render tech stack groups with clean iOS-style icons
 */
function renderSkills(container, categories) {
  if (!container) return;

  container.innerHTML = categories
    .map(
      (cat) => `
      <div class="tech-group">
        <h3 class="tech-group-title">${cat.title}</h3>
        <div class="tech-icons">
          ${cat.tools
            .map(
              (tool) => `
            <div class="tech-item">
              <span class="tech-icon-box" aria-hidden="true" style="color: ${tool.color || '#4F6EF7'}">${ICONS[tool.icon] || ''}</span>
              <span class="tech-item-name">${tool.name}</span>
            </div>`
            )
            .join('')}
        </div>
      </div>`
    )
    .join('');
}