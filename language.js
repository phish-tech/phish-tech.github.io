// Preserve the section when switching between the two static language editions.
// Plain links remain usable when JavaScript is disabled.
(() => {
  const links = document.querySelectorAll('[data-language-switch]');
  const update = () => {
    for (const link of links) {
      const destination = new URL(link.getAttribute('href'), window.location.href);
      destination.hash = window.location.hash;
      link.href = destination.href;
    }
  };
  update();
  window.addEventListener('hashchange', update);
})();
