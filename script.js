(() => {
  const base = document.createElement('script');
  base.src = 'https://cdn.jsdelivr.net/gh/Andy-graphics/andy-graphics-portfolio@bad87b418dea52c950926ef7b3e6fccc0ea0b84e/script.js';
  base.async = false;
  base.onload = () => runEnhancementsSoon();
  base.onerror = () => runEnhancementsSoon();
  document.head.appendChild(base);

  const uploadedLogoFiles = [
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

  function runEnhancementsSoon() {
    [120, 450, 1000, 1800].forEach(delay => setTimeout(runEnhancements, delay));
  }

  function runEnhancements() {
    addPortfolioEnhancementStyles();
    addUploadedLogosFromFolder();
    addClientMetricWithAnimation();
    addPsychologyCertificate();
    addFashionModelVisuals();
    wireUploadedCards();
    wireLiveFilters();
    updateLogoCount();
  }

  function esc(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  function assetPath(folder, filename) {
    return `${folder}/${encodeURIComponent(filename)}`;
  }

  function cleanLogoName(filename) {
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

  function addPortfolioEnhancementStyles() {
    if (document.getElementById('portfolio-enhancement-style')) return;

    const style = document.createElement('style');
    style.id = 'portfolio-enhancement-style';
    style.textContent = `
      .hero-meta{grid-template-columns:repeat(4,1fr)}
      .client-global-stat strong,.client-count-number{color:#fff}
      .client-global-stat span{max-width:165px}
      .client-count-number{display:inline-block;min-width:3.1ch}
      .fashion-model-note{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.12)!important;background:linear-gradient(145deg,rgba(185,0,0,.14),rgba(255,255,255,.04))!important}
      .fashion-model-note:after{content:'MODEL';position:absolute;right:18px;top:14px;font-size:.66rem;letter-spacing:.22em;color:rgba(255,255,255,.28)}
      .uploaded-logo .logo-media{min-height:230px;padding:28px;display:flex;align-items:center;justify-content:center;background:#fff}
      .uploaded-logo .logo-media.tone-dark{background:#080808}
      .uploaded-logo .logo-media img{max-width:100%;max-height:190px;object-fit:contain;filter:none!important}
      .uploaded-logo .logo-caption{background:linear-gradient(135deg,rgba(185,0,0,.94),rgba(13,13,13,.96));color:#fff}
      .uploaded-logo .logo-caption p{color:#ffd8d8}.uploaded-logo .logo-caption h3,.uploaded-logo .logo-caption span{color:#fff}
      @media(max-width:760px){.hero-meta{grid-template-columns:1fr}.client-global-stat span{max-width:none}}
    `;
    document.head.appendChild(style);
  }

  function addUploadedLogosFromFolder() {
    const grid = document.getElementById('logo-grid');
    if (!grid) return;

    const existingImages = new Set(Array.from(document.querySelectorAll('.logo-project')).map(card => card.dataset.image));
    const cards = uploadedLogoFiles
      .map(filename => {
        const src = assetPath('assets/logos', filename);
        if (existingImages.has(src)) return '';

        const name = cleanLogoName(filename);
        const darkTone = /gold|global strategic|glseg|richie|transfergeld|web3digital/i.test(filename);
        const tone = darkTone ? 'dark' : 'light';
        const group = /bank|capital|trade|asset|finance|forex|exchange|web3|stock|options/i.test(filename) ? 'technology' : 'corporate';

        return `<article class="logo-project uploaded-logo reveal visible" tabindex="0" data-logo-category="${group}" data-image="${src}" data-title="${esc(name)}" data-type="Logo Design" data-tone="${tone}">
          <div class="logo-media tone-${tone}"><img src="${src}" alt="${esc(name)} logo design by Andy Graphics" loading="lazy"></div>
          <div class="logo-caption"><div><p>Logo Design</p><h3>${esc(name)}</h3></div><span>View</span></div>
        </article>`;
      })
      .filter(Boolean)
      .join('');

    if (cards) grid.insertAdjacentHTML('afterbegin', cards);
  }

  function addClientMetricWithAnimation() {
    const heroMeta = document.querySelector('.hero-meta');
    if (!heroMeta) return;

    let stat = heroMeta.querySelector('.client-global-stat');
    if (!stat) {
      stat = document.createElement('div');
      stat.className = 'client-global-stat';
      heroMeta.appendChild(stat);
    }

    stat.innerHTML = '<strong><span class="client-count-number" data-count-target="173">0</span>+</strong><span>Clients worked with globally</span>';

    const number = stat.querySelector('.client-count-number');
    if (!number || number.dataset.animated === 'true') return;
    number.dataset.animated = 'true';

    const startCounter = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        number.textContent = '173';
        return;
      }

      const duration = 1400;
      const startTime = performance.now();
      const animate = now => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        number.textContent = String(Math.round(173 * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounter();
            observer.disconnect();
          }
        });
      }, { threshold: 0.35 });
      observer.observe(stat);
    } else {
      startCounter();
    }
  }

  function addPsychologyCertificate() {
    const certificationCard = Array.from(document.querySelectorAll('.resume-card')).find(card => {
      return /certifications/i.test(card.querySelector('.mini-label')?.textContent || '');
    });
    const list = certificationCard?.querySelector('.clean-list');
    if (!list || /Psychology Certificate/i.test(list.textContent)) return;

    list.insertAdjacentHTML('beforeend', '<li><strong>Certificate</strong> Psychology Certificate</li>');
  }

  function addFashionModelVisuals() {
    const grid = document.querySelector('.capability-grid');
    if (grid && !/Fashion Model Visuals/i.test(grid.textContent)) {
      grid.insertAdjacentHTML('beforeend', `<article class="fashion-model-note reveal visible"><span>05</span><h3>Fashion Model Visuals</h3><p>Model-led fashion, beauty and lifestyle creatives for campaigns, lookbooks and social media.</p></article>`);
    }

    const skills = Array.from(document.querySelectorAll('.resume-card')).find(card => /Professional skills/i.test(card.querySelector('.mini-label')?.textContent || ''));
    const tagList = skills?.querySelector('.tag-list');
    if (tagList && !/Fashion model visuals/i.test(tagList.textContent)) {
      tagList.insertAdjacentHTML('beforeend', '<span>Fashion model visuals</span>');
    }
  }

  function wireUploadedCards() {
    const lightbox = document.querySelector('.lightbox');
    const media = lightbox?.querySelector('.lightbox-media');
    const image = lightbox?.querySelector('img');
    const title = lightbox?.querySelector('h3');
    const type = lightbox?.querySelector('p');

    document.querySelectorAll('.uploaded-logo,.uploaded-flyer').forEach(card => {
      if (card.dataset.previewWired === 'true') return;
      card.dataset.previewWired = 'true';

      const open = () => {
        if (!lightbox || !media || !image || !title || !type) return;
        image.src = card.dataset.image;
        image.alt = card.dataset.title;
        title.textContent = card.dataset.title;
        type.textContent = card.dataset.type;
        media.className = `lightbox-media tone-${card.dataset.tone || 'light'}`;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      };

      card.addEventListener('click', open);
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open();
        }
      });
    });
  }

  function wireLiveFilters() {
    document.querySelectorAll('.logo-filter').forEach(button => {
      if (button.dataset.enhancedFilterWired === 'true') return;
      button.dataset.enhancedFilterWired = 'true';
      button.addEventListener('click', () => {
        const value = button.dataset.logoFilter;
        document.querySelectorAll('.logo-project').forEach(card => {
          card.classList.toggle('hidden', value !== 'all' && card.dataset.logoCategory !== value);
        });
      });
    });
  }

  function updateLogoCount() {
    const count = document.querySelector('.logo-count strong');
    if (!count) return;
    const total = document.querySelectorAll('.logo-project').length;
    if (total > 0) count.textContent = String(total);
  }
})();
