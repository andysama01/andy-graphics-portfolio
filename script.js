(() => {
  const base = document.createElement('script');
  base.src = 'https://cdn.jsdelivr.net/gh/Andy-graphics/andy-graphics-portfolio@5a669c5337858f927014f3ea6159719b2b981d02/script.js';
  base.async = false;
  base.onload = () => setTimeout(addLatestUploads, 0);
  base.onerror = () => addLatestUploads();
  document.head.appendChild(base);

  const latestFlyers = [
    'Screenshot 2026-07-31 095349.png',
    'Screenshot 2026-07-31 095442.png'
  ];

  const latestLogos = [
    'AJ_Tradehouse logo 1.png',
    'AMSONTECH Solutions logo 1.png',
    'Assetstocker logo v1.png',
    'Aura timbers logo v 1.png',
    'AuraTrustBank logo 1.png',
    'Binestockexchange logoo.png',
    'BondsCapitalTrade logo 2.png',
    'Cardtrxchange logo 1.png',
    'Centenialcapital logo 1.png',
    'Crown Haven logo 1.png',
    'Farmaballistics logo v 1.png',
    'GLSEG logo 1.png',
    'Global Strategic logistics logo 1.png',
    'Growassetinvex logo 1.png',
    'Hashvestcapital logo 1.png',
    'Intel Trade Capital logo 1.png',
    "Jhay's Luxe logo gold version.png",
    'Litecapitalprime logo 1.png',
    'North Reserve Bank logo.png',
    'Raygreenbank logo 1.png',
    'RevalFinance logo 1.png',
    'Richie Forex academy blk.png',
    'Sterlingforts logo 1.png',
    'StratifyOptions logo 1.png',
    'The Giving Arm logo 1.png',
    'The republic Fx logo 1.png',
    'Tradecapital logo 01.png',
    'TransferGeld logo -1 (BLK TXT).png',
    'Ultimabusinesspro logo 1.png',
    'Web3AssetHub logo 1.png',
    'Web3DigitalConnect logo icon blk v.png',
    'Wemovexpress logo 1.png',
    'Zoil and Gas logo v3.png'
  ];

  function esc(value) {
    return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
  }

  function path(folder, filename) {
    return `${folder}/${encodeURIComponent(filename)}`;
  }

  function cleanName(filename) {
    return filename
      .replace(/\.[^.]+$/, '')
      .replace(/logoo?/ig, '')
      .replace(/logo/ig, '')
      .replace(/blk txt/ig, '')
      .replace(/gold version/ig, '')
      .replace(/\b(v|version)\s*\d*\b/ig, '')
      .replace(/\b\d+\b/g, '')
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function addLatestUploads() {
    addStyles();
    addFlyers();
    addLogos();
    wireCards();
    wireFilters();
    updateLogoCount();
  }

  function addStyles() {
    if (document.getElementById('latest-upload-style')) return;
    const style = document.createElement('style');
    style.id = 'latest-upload-style';
    style.textContent = `
      .uploaded-flyer{background:#f4f1eb;min-height:540px;box-shadow:0 18px 42px rgba(0,0,0,.22)}
      .uploaded-flyer img{width:100%;height:100%;object-fit:contain;background:#f4f1eb;padding:10px;filter:none!important}
      .uploaded-flyer:hover img,.uploaded-flyer:focus img{transform:scale(1.01);filter:none!important}
      .uploaded-flyer .project-info{background:linear-gradient(135deg,rgba(185,0,0,.96),rgba(10,10,10,.96));border-radius:16px;padding:14px;left:14px;right:14px;bottom:14px}
      .uploaded-flyer .project-info p{color:#ffd8d8}.uploaded-flyer .project-info h3{color:#fff}
      .uploaded-logo .logo-media{min-height:230px;padding:28px;display:flex;align-items:center;justify-content:center;background:#fff}
      .uploaded-logo .logo-media.tone-dark{background:#080808}
      .uploaded-logo .logo-media img{max-width:100%;max-height:190px;object-fit:contain;filter:none!important}
      .uploaded-logo .logo-caption{background:linear-gradient(135deg,rgba(185,0,0,.94),rgba(13,13,13,.96));color:#fff}
      .uploaded-logo .logo-caption p{color:#ffd8d8}.uploaded-logo .logo-caption h3,.uploaded-logo .logo-caption span{color:#fff}
    `;
    document.head.appendChild(style);
  }

  function addFlyers() {
    const grid = document.querySelector('.portfolio-grid');
    if (!grid || grid.dataset.latestFlyersAdded === 'true') return;
    grid.dataset.latestFlyersAdded = 'true';
    const current = document.querySelectorAll('.portfolio-grid .project').length;
    const html = latestFlyers.map((file, index) => {
      const title = `Flyer Design ${String(current + index + 1).padStart(2, '0')}`;
      const src = path('assets/work', file);
      return `<article class="project uploaded-flyer reveal visible" data-category="campaign" tabindex="0" data-image="${src}" data-title="${esc(title)}" data-type="Portfolio Campaign Design" data-tone="light"><img src="${src}" alt="${esc(title)} by Andy Graphics" loading="lazy"><div class="project-info"><div><p>Portfolio Campaign Design</p><h3>${esc(title)}</h3></div><span>View</span></div></article>`;
    }).join('');
    grid.insertAdjacentHTML('afterbegin', html);
  }

  function addLogos() {
    const grid = document.getElementById('logo-grid');
    if (!grid || grid.dataset.latestLogosAdded === 'true') return;
    grid.dataset.latestLogosAdded = 'true';
    const html = latestLogos.map(file => {
      const name = cleanName(file);
      const tone = /gold|GLSEG|Global Strategic/i.test(file) ? 'dark' : 'light';
      const src = path('assets/logos', file);
      return `<article class="logo-project uploaded-logo reveal visible" tabindex="0" data-logo-category="technology" data-image="${src}" data-title="${esc(name)}" data-type="Logo Design" data-tone="${tone}"><div class="logo-media tone-${tone}"><img src="${src}" alt="${esc(name)} logo design by Andy Graphics" loading="lazy"></div><div class="logo-caption"><div><p>Logo Design</p><h3>${esc(name)}</h3></div><span>View</span></div></article>`;
    }).join('');
    grid.insertAdjacentHTML('afterbegin', html);
  }

  function wireCards() {
    const lightbox = document.querySelector('.lightbox');
    const media = lightbox?.querySelector('.lightbox-media');
    const img = lightbox?.querySelector('img');
    const title = lightbox?.querySelector('h3');
    const type = lightbox?.querySelector('p');
    document.querySelectorAll('.uploaded-flyer,.uploaded-logo').forEach(card => {
      if (card.dataset.previewWired === 'true') return;
      card.dataset.previewWired = 'true';
      const open = () => {
        if (!lightbox || !media || !img || !title || !type) return;
        img.src = card.dataset.image;
        img.alt = card.dataset.title;
        title.textContent = card.dataset.title;
        type.textContent = card.dataset.type;
        media.className = `lightbox-media tone-${card.dataset.tone || 'light'}`;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
      };
      card.addEventListener('click', open);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
  }

  function wireFilters() {
    document.querySelectorAll('.work .filter').forEach(button => {
      if (button.dataset.liveFilterWired === 'true') return;
      button.dataset.liveFilterWired = 'true';
      button.addEventListener('click', () => {
        const value = button.dataset.filter;
        document.querySelectorAll('.portfolio-grid .project').forEach(card => {
          const categories = (card.dataset.category || '').split(' ');
          card.classList.toggle('hidden', value !== 'all' && !categories.includes(value));
        });
      });
    });
    document.querySelectorAll('.logo-filter').forEach(button => {
      if (button.dataset.liveFilterWired === 'true') return;
      button.dataset.liveFilterWired = 'true';
      button.addEventListener('click', () => {
        const value = button.dataset.logoFilter;
        document.querySelectorAll('#logo-grid .logo-project').forEach(card => {
          card.classList.toggle('hidden', value !== 'all' && card.dataset.logoCategory !== value);
        });
      });
    });
  }

  function updateLogoCount() {
    const count = document.querySelector('.logo-count strong');
    const total = document.querySelectorAll('#logo-grid .logo-project').length;
    if (count && total) count.textContent = `${total}+`;
  }
})();