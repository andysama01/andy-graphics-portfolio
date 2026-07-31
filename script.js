(() => {
  const legacy = document.createElement('script');
  legacy.src = 'https://cdn.jsdelivr.net/gh/andysama01/andy-graphics-portfolio@b22229f95064eb447b3048d814e6cad05c74ebad/script.js';
  legacy.async = false;
  legacy.onload = () => splitLatestPortfolioSheets();
  legacy.onerror = () => {
    console.error('Could not load portfolio gallery script.');
  };
  document.head.appendChild(legacy);

  function splitLatestPortfolioSheets() {
    const style = document.createElement('style');
    style.textContent = `
      .latest-individual .sheet-crop{display:block;width:100%;background-repeat:no-repeat;background-color:#fff;}
      .logo-project.latest-individual .logo-media{padding:16px;display:flex;align-items:center;justify-content:center;background:#fff;}
      .logo-project.latest-individual .logo-media.tone-dark{background:#080808;}
      .logo-project.latest-individual .logo-crop{height:220px;border-radius:18px;background-color:transparent;}
      .project.latest-individual{background:#fff;}
      .project.latest-individual .project-crop{height:clamp(390px,74vw,650px);background-size:cover;border-radius:inherit;}
      .project.latest-individual .project-info,.logo-project.latest-individual .logo-caption{background:linear-gradient(135deg,rgba(185,0,0,.95),rgba(18,18,18,.96));color:#fff;}
      .project.latest-individual .project-info p,.logo-project.latest-individual .logo-caption p{color:#ffd7d7;}
      .project.latest-individual .project-info h3,.logo-project.latest-individual .logo-caption h3,.logo-project.latest-individual .logo-caption span{color:#fff;}
      .lightbox-media.tone-light,.lightbox-media.tone-cream{background:#fff;}
      .lightbox-media.tone-dark{background:#080808;}
      .lightbox-media img{object-fit:contain;}
      @media(max-width:700px){.logo-project.latest-individual .logo-crop{height:190px}.project.latest-individual .project-crop{height:520px;}}
    `;
    document.head.appendChild(style);

    const logoItems = [
      ['Xcrypt Academy','Forex & Crypto Education','technology','light'],
      ['Zirostack','Technology Brand','technology','light'],
      ['AMSONTECH Solutions','Technology Solutions','technology','light'],
      ['MetaCandleCapital','Finance & Trading','technology','light'],
      ['TradeHubFX','Forex Trading','technology','light'],
      ['AuraTrustBank','Fintech & Banking','technology','light'],
      ['Farmaballistics','Health & Pharmaceutical','corporate','light'],
      ['Cardtrxchange','Digital Exchange','technology','light'],
      ['Global Strategic Logistics','Logistics','corporate','dark'],
      ['GLSEG','Logistics','corporate','dark'],
      ['Intel Trade Capital','Finance & Trading','technology','light'],
      ['LiteCapitalPrime','Finance & Trading','technology','light'],
      ['RichieForex Trading Academy','Forex Academy','technology','light'],
      ['Sterlingforts','Corporate Services','corporate','light'],
      ['The Giving Arm','Nonprofit','corporate','light'],
      ['Tradecapital','Finance & Trading','technology','light'],
      ['TransferGeld','Money Transfer','technology','light'],
      ['UltimaBusinessPro','Business Services','corporate','light'],
      ['Web3AssetHub','Web3 Finance','technology','light'],
      ['Web3DigitalConnect','Web3 Technology','technology','light']
    ];

    const flyerItems = [
      ['Xcrypt FUTO Forex & Crypto Mentorship','Forex & Crypto Campaign','technology campaign'],
      ['Xcrypt Online Forex Mentorship','Forex Mentorship Campaign','technology campaign'],
      ['Her Bloom Women’s Day','Women’s Day Campaign','lifestyle campaign'],
      ['James Benson Women’s Day','Fashion Campaign','lifestyle campaign'],
      ['Sekani International Women’s Day','Lifestyle Campaign','lifestyle campaign'],
      ['Zirostack Women’s Day','Technology Campaign','technology campaign'],
      ['Zirostack Services','Technology Services Campaign','technology campaign'],
      ['Zirostack Graphic Design','Creative Services Campaign','technology campaign'],
      ['Zirostack Web Content','Technology Services Campaign','technology campaign'],
      ['Chuksco Steel April New Month','Corporate Campaign','corporate campaign'],
      ['Chyte April Delivery Campaign','Delivery Services Campaign','lifestyle campaign'],
      ['Koynfi April Transactions','Finance Campaign','technology campaign'],
      ['TellerHost March New Month','Web Hosting Campaign','technology campaign'],
      ['Chuksco Steel July New Month','Corporate Campaign','corporate campaign'],
      ['Chuksco Construction July','Construction Campaign','corporate campaign'],
      ['Sekani July New Month','Lifestyle Campaign','lifestyle campaign'],
      ['Hitek Gadgets For You','Gadget Retail Campaign','technology campaign'],
      ['Hitek Sharp, Smart & Yours','Gadget Retail Campaign','technology campaign'],
      ['Hitek Gadget Accessories','Gadget Retail Campaign','technology campaign'],
      ['Hitek GoPro Season','Gadget Retail Campaign','technology campaign'],
      ['Hitek Laptops Made for You','Gadget Retail Campaign','technology campaign'],
      ['Hitek Game Power Fun','Gadget Retail Campaign','technology campaign']
    ];

    const logoSheetCard = [...document.querySelectorAll('#logo-grid .logo-project')].find(card => card.dataset.title === 'Latest Logo Collection' || card.classList.contains('latest-collection'));
    const flyerSheetCard = [...document.querySelectorAll('.portfolio-grid .project')].find(card => card.dataset.title === 'Latest Flyer Collection' || card.classList.contains('latest-collection'));
    const logoSheet = logoSheetCard?.dataset.image || logoSheetCard?.querySelector('img')?.src;
    const flyerSheet = flyerSheetCard?.dataset.image || flyerSheetCard?.querySelector('img')?.src;
    logoSheetCard?.remove();
    flyerSheetCard?.remove();

    const logoGrid = document.getElementById('logo-grid');
    if (logoGrid && logoSheet) {
      logoGrid.insertAdjacentHTML('afterbegin', logoItems.map((item, index) => logoCard(item, index, logoSheet, 4, 5)).join(''));
    }

    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid && flyerSheet) {
      portfolioGrid.insertAdjacentHTML('afterbegin', flyerItems.map((item, index) => flyerCard(item, index, flyerSheet, 4, Math.ceil(flyerItems.length / 4))).join(''));
    }

    const count = document.querySelector('.logo-count strong');
    if (count) count.textContent = String(document.querySelectorAll('#logo-grid .logo-project').length) + '+';

    wireFilters();
    wireCropLightbox();
  }

  function safe(value) {
    return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
  }

  function cropStyle(sheet, index, cols, rows) {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = cols <= 1 ? 0 : (col / (cols - 1)) * 100;
    const y = rows <= 1 ? 0 : (row / (rows - 1)) * 100;
    return `background-image:url('${sheet}');background-size:${cols * 100}% ${rows * 100}%;background-position:${x}% ${y}%;`;
  }

  function cropData(index, sheet, cols, rows) {
    const col = index % cols;
    const row = Math.floor(index / cols);
    return `data-sheet='${sheet}' data-cols='${cols}' data-rows='${rows}' data-col='${col}' data-row='${row}'`;
  }

  function logoCard(item, index, sheet, cols, rows) {
    const [name, industry, group, tone] = item;
    return `<article class='logo-project latest-individual ag-crop-card visible' tabindex='0' data-logo-category='${group}' data-title='${safe(name)}' data-type='${safe(industry)} — Logo Design' data-tone='${tone}' ${cropData(index, sheet, cols, rows)}>
      <div class='logo-media tone-${tone}'><div class='sheet-crop logo-crop' style="${cropStyle(sheet, index, cols, rows)}"></div></div>
      <div class='logo-caption'><div><p>${safe(industry)}</p><h3>${safe(name)}</h3></div><span>View</span></div>
    </article>`;
  }

  function flyerCard(item, index, sheet, cols, rows) {
    const [title, type, category] = item;
    return `<article class='project latest-individual ag-crop-card visible' data-category='${category}' tabindex='0' data-title='${safe(title)}' data-type='${safe(type)}' data-tone='light' ${cropData(index, sheet, cols, rows)}>
      <div class='project-crop sheet-crop' style="${cropStyle(sheet, index, cols, rows)}"></div>
      <div class='project-info'><div><p>${safe(type)}</p><h3>${safe(title)}</h3></div><span>View</span></div>
    </article>`;
  }

  function wireFilters() {
    const portfolioFilters = document.querySelectorAll('.work .filter');
    portfolioFilters.forEach(button => button.addEventListener('click', () => {
      const value = button.dataset.filter;
      document.querySelectorAll('.portfolio-grid .project').forEach(project => {
        const match = value === 'all' || (project.dataset.category || '').split(' ').includes(value);
        project.classList.toggle('hidden', !match);
      });
    }));

    const logoFilters = document.querySelectorAll('.logo-filter');
    logoFilters.forEach(button => button.addEventListener('click', () => {
      const value = button.dataset.logoFilter;
      document.querySelectorAll('#logo-grid .logo-project').forEach(card => {
        card.classList.toggle('hidden', value !== 'all' && card.dataset.logoCategory !== value);
      });
    }));
  }

  const loadedSheets = new Map();
  function loadSheet(src) {
    if (loadedSheets.has(src)) return loadedSheets.get(src);
    const promise = new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
    loadedSheets.set(src, promise);
    return promise;
  }

  async function cropToDataUrl(card) {
    const sheet = card.dataset.sheet;
    const cols = Number(card.dataset.cols || 1);
    const rows = Number(card.dataset.rows || 1);
    const col = Number(card.dataset.col || 0);
    const row = Number(card.dataset.row || 0);
    const image = await loadSheet(sheet);
    const sourceW = image.naturalWidth / cols;
    const sourceH = image.naturalHeight / rows;
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(sourceW);
    canvas.height = Math.round(sourceH);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, col * sourceW, row * sourceH, sourceW, sourceH, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
  }

  function wireCropLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxMedia = lightbox?.querySelector('.lightbox-media');
    const lightboxImage = lightbox?.querySelector('img');
    const lightboxTitle = lightbox?.querySelector('h3');
    const lightboxType = lightbox?.querySelector('p');
    if (!lightbox || !lightboxMedia || !lightboxImage || !lightboxTitle || !lightboxType) return;

    const open = async card => {
      lightboxImage.src = await cropToDataUrl(card);
      lightboxImage.alt = card.dataset.title;
      lightboxTitle.textContent = card.dataset.title;
      lightboxType.textContent = card.dataset.type;
      lightboxMedia.className = `lightbox-media tone-${card.dataset.tone || 'light'}`;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('.ag-crop-card').forEach(card => {
      card.addEventListener('click', event => {
        event.stopPropagation();
        open(card);
      });
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open(card);
        }
      });
    });
  }
})();