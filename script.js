(() => {
  const base = document.createElement('script');
  base.src = 'https://cdn.jsdelivr.net/gh/Andy-graphics/andy-graphics-portfolio@bad87b418dea52c950926ef7b3e6fccc0ea0b84e/script.js';
  base.async = false;
  base.onload = () => setTimeout(addClientMetric, 0);
  base.onerror = () => addClientMetric();
  document.head.appendChild(base);

  function addClientMetric() {
    addClientMetricStyle();

    const heroMeta = document.querySelector('.hero-meta');
    if (!heroMeta || heroMeta.dataset.clientMetricAdded === 'true') return;
    heroMeta.dataset.clientMetricAdded = 'true';

    const stat = document.createElement('div');
    stat.className = 'client-global-stat';
    stat.innerHTML = '<strong>173+</strong><span>Clients worked with globally</span>';
    heroMeta.appendChild(stat);
  }

  function addClientMetricStyle() {
    if (document.getElementById('client-global-stat-style')) return;

    const style = document.createElement('style');
    style.id = 'client-global-stat-style';
    style.textContent = `
      .hero-meta{grid-template-columns:repeat(4,1fr)}
      .client-global-stat strong{color:#fff}
      .client-global-stat span{max-width:150px}
      @media(max-width:760px){.hero-meta{grid-template-columns:1fr}.client-global-stat span{max-width:none}}
    `;
    document.head.appendChild(style);
  }
})();
