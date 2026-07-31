(() => {
  const base = document.createElement('script');
  base.src = 'https://cdn.jsdelivr.net/gh/Andy-graphics/andy-graphics-portfolio@058fb1824d5dae5b05a17c1ecf031c73868557d1/script.js';
  base.async = false;
  base.onload = () => runClientStatFixSoon();
  base.onerror = () => runClientStatFixSoon();
  document.head.appendChild(base);

  function runClientStatFixSoon() {
    [120, 350, 700, 1300, 2500, 4200].forEach(delay => setTimeout(() => { fixClientStat(); fixBlackTextLogoBackgrounds(); }, delay));
  }

  function addClientStatStyle() {
    let style = document.getElementById('client-stat-strong-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'client-stat-strong-style';
      document.head.appendChild(style);
    }

    style.textContent = `
      .hero-meta{grid-template-columns:repeat(4,1fr)!important}
      .hero-meta .client-global-stat strong,
      .hero-meta .client-global-stat .client-number-wrap{
        display:inline-flex!important;
        align-items:baseline!important;
        gap:1px!important;
        font-size:clamp(1.65rem,2.8vw,2.25rem)!important;
        line-height:1!important;
        font-weight:900!important;
        letter-spacing:-.035em!important;
        color:#fff!important;
        text-transform:none!important;
      }
      .hero-meta .client-global-stat .client-count-number{
        display:inline-block!important;
        min-width:0!important;
        font-size:inherit!important;
        line-height:inherit!important;
        font-weight:inherit!important;
        color:#fff!important;
        letter-spacing:inherit!important;
      }
      .hero-meta .client-global-stat .client-plus{
        color:#d80000!important;
        font-size:inherit!important;
        line-height:inherit!important;
        font-weight:900!important;
        letter-spacing:-.02em!important;
        margin-left:1px!important;
      }
      .hero-meta .client-global-stat span:last-child{max-width:170px!important}
      @media(max-width:760px){.hero-meta{grid-template-columns:1fr!important}.hero-meta .client-global-stat span:last-child{max-width:none!important}}
    `;
  }

  function isClientMetric(element) {
    if (!element || element.parentElement?.classList?.contains('client-cloud')) return false;
    const text = (element.textContent || '').replace(/\s+/g, ' ').trim();
    return element.classList?.contains('client-global-stat') || /clients worked with globally/i.test(text);
  }

  function fixClientStat() {
    addClientStatStyle();

    const heroMeta = document.querySelector('.hero-meta');
    if (!heroMeta) return;

    const clientItems = Array.from(heroMeta.children).filter(isClientMetric);
    let stat = clientItems[0] || document.createElement('div');
    stat.className = 'client-global-stat';

    clientItems.slice(1).forEach(item => item.remove());

    if (!stat.parentElement) {
      const firstMetric = heroMeta.children[0] || null;
      if (firstMetric?.nextSibling) heroMeta.insertBefore(stat, firstMetric.nextSibling);
      else heroMeta.appendChild(stat);
    }

    const firstMetric = heroMeta.children[0];
    if (firstMetric && firstMetric !== stat && firstMetric.nextElementSibling !== stat) {
      heroMeta.insertBefore(stat, firstMetric.nextElementSibling);
    }

    const needsReset = stat.dataset.metricValue !== '300' || !stat.querySelector('.client-plus');
    if (needsReset) {
      stat.innerHTML = '<strong class="client-number-wrap"><span class="client-count-number" data-count-target="300">0</span><span class="client-plus">+</span></strong><span>Clients worked with globally</span>';
      stat.dataset.metricValue = '300';
      stat.dataset.counterStarted = '';
      stat.dataset.counterDone = '';
    }

    const number = stat.querySelector('.client-count-number');
    if (!number) return;

    if (stat.dataset.counterDone === 'true') {
      number.textContent = '300';
      return;
    }

    if (stat.dataset.counterStarted === 'true') return;
    stat.dataset.counterStarted = 'true';
    animateClientNumber(number, stat);
    watchForClientDuplicates(heroMeta);
  }

  function animateClientNumber(number, stat) {
    const finish = () => {
      number.textContent = '300';
      stat.dataset.counterDone = 'true';
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      return;
    }

    const startTime = performance.now();
    const duration = 1500;
    const animate = now => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      number.textContent = String(Math.round(300 * eased));
      if (progress < 1) requestAnimationFrame(animate);
      else finish();
    };
    requestAnimationFrame(animate);
  }

  function watchForClientDuplicates(heroMeta) {
    if (heroMeta.dataset.strongClientWatcher === 'true') return;
    heroMeta.dataset.strongClientWatcher = 'true';
    const observer = new MutationObserver(() => fixClientStat());
    observer.observe(heroMeta, { childList: true, subtree: false });
  }

  function fixBlackTextLogoBackgrounds() {
    const blackTextFiles = [
      'Richie Forex academy blk.png',
      'TransferGeld logo -1 (BLK TXT).png',
      'Web3DigitalConnect logo icon blk v.png'
    ];

    document.querySelectorAll('.logo-project').forEach(card => {
      const source = decodeURIComponent(card.dataset.image || '');
      if (!blackTextFiles.some(filename => source.endsWith(filename))) return;

      card.dataset.tone = 'light';
      const media = card.querySelector('.logo-media');
      if (media) {
        media.classList.remove('tone-dark', 'tone-brand', 'tone-cream');
        media.classList.add('tone-light', 'black-text-logo');
      }
    });
  }

})();
