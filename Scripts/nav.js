const menuConfig = [
  { label: 'Home', href: 'index.html' },
  {
    label: 'AI Tools',
    href: './Pages/ai.html',
    
  },
  {
    label: 'Blog',
    href: 'Pages/Blog.html',
    
  },
  { label: 'About me', href: 'Pages/AboutMe.html' },
  { label: 'Portfolio', href: 'Pages/Portfolio.html' }
];

function isInsidePagesFolder() {
  return window.location.pathname.includes('/Pages/');
}

function resolveHref(href) {
  if (!href || href.startsWith('#')) {
    return href || '#';
  }

  const base = isInsidePagesFolder() ? '../' : './';
  return `${base}${href}`;
}

function buildMenuHTML() {
  const menuItems = menuConfig.map((item) => {
    const link = resolveHref(item.href);

    if (item.children) {
      return `
        <li class="dropdown">
          <a href="${link}">${item.label}</a>
          <ul class="sub-menu">
            ${item.children.map((child) => `
              <li class="item">
                <a href="${resolveHref(child.href)}">${child.label}</a>
              </li>
            `).join('')}
          </ul>
        </li>
      `;
    }

    return `
      <li class="menu-item">
        <a href="${link}">${item.label}</a>
      </li>
    `;
  }).join('');

  return `
    <div class="nav-shell">
      <div class="nav-logo">
        <img src="${isInsidePagesFolder() ? '../assets/' : './assets/'}me.jpg" alt="Logo" class="logo-img">
        <span class="welcome-text">Welcome</span>
      </div>
      <ul class="menu w3-center">
        ${menuItems}
      </ul>
      
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  nav.innerHTML = buildMenuHTML();
});
