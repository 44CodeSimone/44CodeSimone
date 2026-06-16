import { content } from './content.js';

function applySimpleBindings() {
  document.querySelectorAll('[data-bind]').forEach((node) => {
    const key = node.getAttribute('data-bind');
    if (key && key in content) node.textContent = content[key];
  });

  document.querySelectorAll('[data-bind-href]').forEach((node) => {
    const key = node.getAttribute('data-bind-href');
    if (key && key in content) node.setAttribute('href', content[key]);
  });
}

function renderCards(targetId, items) {
  const root = document.getElementById(targetId);
  if (!root) return;

  root.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <strong>${item.title}</strong>
        <p>${item.description}</p>
      </article>
    `
    )
    .join('');
}

applySimpleBindings();
renderCards('services-list', content.services);
renderCards('testimonials-list', content.testimonials);
document.getElementById('year').textContent = new Date().getFullYear();
