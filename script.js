(() => {
  const legacy = document.createElement('script');
  legacy.src = 'https://cdn.jsdelivr.net/gh/Andy-graphics/andy-graphics-portfolio@dd8f7094efda22d076a95cdec0e7a9895307e197/script.js';
  legacy.async = false;
  legacy.onload = () => setTimeout(addUploadedFlyers, 0);
  legacy.onerror = () => {
    console.warn('Legacy portfolio script could not be loaded. Showing uploaded flyers only.');
    addUploadedFlyers();
  };
  document.head.appendChild(legacy);

  const uploadedFlyers = [
    'Screenshot 2026-07-31 084723.png',
    'Screenshot 2026-07-31 084750.png',
    'Screenshot 2026-07-31 084755.png',
    'Screenshot 2026-07-31 084800.png',
    'Screenshot 2026-07-31 084805.png',
    'Screenshot 2026-07-31 084810.png',
    'Screenshot 2026-07-31 084815.png',
    'Screenshot 2026-07-31 084821.png',
    'Screenshot 2026-07-31 084916.png',
    'Screenshot 2026-07-31 085001.png',
    'Screenshot 2026-07-31 085043.png',
    'Screenshot 2026-07-31 085108.png',
    'Screenshot 2026-07-31 085113.png',
    'Screenshot 2026-07-31 085134.png',
    'Screenshot 2026-07-31 085139.png',
    'Screenshot 2026-07-31 085146.png',
    'Screenshot 2026-07-31 085216.png',
    'Screenshot 2026-07-31 085233.png',
    'Screenshot 2026-07-31 085254.png',
    'Screenshot 2026-07-31 085258.png',
    'Screenshot 2026-07-31 085305.png',
    'Screenshot 2026-07-31 085326.png',
    'Screenshot 2026-07-31 085344.png',
    'Screenshot 2026-07-31 085419.png',
    'Screenshot 2026-07-31 085442.png',
    'Screenshot 2026-07-31 085446.png',
    'Screenshot 2026-07-31 085509.png',
    'Screenshot 2026-07-31 085527.png',
    'Screenshot 2026-07-31 085552.png',
    'Screenshot 2026-07-31 085606.png',
    'Screenshot 2026-07-31 085633.png',
    'Screenshot 2026-07-31 085646.png',
    'Screenshot 2026-07-31 090315.png',
    'Screenshot 2026-07-31 090928.png',
    'Screenshot 2026-07-31 090937.png',
    'Screenshot 2026-07-31 091013.png'
  ];

  function safe(value) {
    return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  }

  function addUploadedFlyers() {
    const grid = document.querySelector('.portfolio-grid');
    if (!grid || grid.dataset.uploadedFlyersAdded === 'true') return;
    grid.dataset.uploadedFlyersAdded = 'true';

    const style = document.createElement('style');
    style.textContent = `
      .project.uploaded-flyer{background:#f4f1eb;min-height:520px;box-shadow:0 18px 42px rgba(0,0,0,.22)}
      .project.uploaded-flyer img{object-fit:contain;background:#f4f1eb;padding:10px;image-rendering:auto;filter:none!important}
      .project.uploaded-flyer:hover img,.project.uploaded-flyer:focus img{transform:scale(1.01);filter:none!important}
      .project.uploaded-flyer .project-info{background:linear-gradient(135deg,rgba(185,0,0,.96),rgba(10,10,10,.96));border-radius:16px;padding:14px;left:14px;right:14px;bottom:14px}
      .project.uploaded-flyer .project-info p{color:#ffd8d8}.project.uploaded-flyer .project-info h3{color:#fff}
      .project.uploaded-flyer:after{background:linear-gradient(180deg,transparent 58%,rgba(0,0,0,.78))}
      @media(max-width:640px){.project.uploaded-flyer{min-height:540px}}
    `;
    document.head.appendChild(style);

    const cards = uploadedFlyers.map((file, index) => {
      const number = String(index + 1).padStart(2, '0');
      const src = `assets/work/${file}`;
      const title = `Recent Flyer ${number}`;
      const type = 'Uploaded Flyer / Campaign Design';
      return `<article class="project uploaded-flyer reveal visible" data-category="campaign lifestyle corporate technology" tabindex="0" data-image="${safe(src)}" data-title="${safe(title)}" data-type="${safe(type)}" data-tone="light">
        <img src="${safe(src)}" alt="${safe(title)}" loading="lazy">
        <div class="project-info"><div><p>${safe(type)}</p><h3>${safe(title)}</h3></div><span>View</span></div>
      </article>`;
    }).join('');

    grid.insertAdjacentHTML('afterbegin', cards);
    wireUploadedFlyers();
  }

  function wireUploadedFlyers() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxMedia = lightbox?.querySelector('.lightbox-media');
    const lightboxImage = lightbox?.querySelector('img');
    const lightboxTitle = lightbox?.querySelector('h3');
    const lightboxType = lightbox?.querySelector('p');

    const closeLightbox = () => {
      if (!lightbox) return;
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    const openLightbox = project => {
      if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxType || !lightboxMedia) return;
      lightboxImage.src = project.dataset.image;
      lightboxImage.alt = project.dataset.title || 'Portfolio preview';
      lightboxTitle.textContent = project.dataset.title || 'Portfolio preview';
      lightboxType.textContent = project.dataset.type || 'Campaign Design';
      lightboxMedia.className = `lightbox-media tone-${project.dataset.tone || 'light'}`;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('.project.uploaded-flyer').forEach(project => {
      project.addEventListener('click', () => openLightbox(project));
      project.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(project);
        }
      });
    });

    lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

    document.querySelectorAll('.work .filter').forEach(button => {
      button.addEventListener('click', () => {
        const value = button.dataset.filter;
        document.querySelectorAll('.portfolio-grid .project').forEach(project => {
          const categories = (project.dataset.category || '').split(' ');
          project.classList.toggle('hidden', value !== 'all' && !categories.includes(value));
        });
      });
    });
  }
})();
