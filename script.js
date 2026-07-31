(() => {
  const legacy = document.createElement('script');
  legacy.src = 'https://cdn.jsdelivr.net/gh/Andy-graphics/andy-graphics-portfolio@dd8f7094efda22d076a95cdec0e7a9895307e197/script.js';
  legacy.async = false;
  legacy.onload = () => setTimeout(addUploadedFlyers, 0);
  legacy.onerror = () => {
    console.warn('Base portfolio script could not be loaded. Showing uploaded flyer designs only.');
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
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  function addUploadedFlyers() {
    const grid = document.querySelector('.portfolio-grid');
    if (!grid || grid.dataset.uploadedFlyersAdded === 'true') return;
    grid.dataset.uploadedFlyersAdded = 'true';

    const cards = uploadedFlyers.map((filename, index) => {
      const number = String(index + 1).padStart(2, '0');
      const title = `Flyer Design ${number}`;
      const type = 'Portfolio Campaign Design';
      const src = `assets/work/${encodeURIComponent(filename)}`;
      return `<article class="project reveal visible uploaded-flyer" data-category="campaign" tabindex="0" data-image="${src}" data-title="${safe(title)}" data-type="${safe(type)}" data-tone="light">
        <img src="${src}" alt="${safe(title)} by Andy Graphics" loading="lazy">
        <div class="project-info"><div><p>${safe(type)}</p><h3>${safe(title)}</h3></div><span>View</span></div>
      </article>`;
    }).join('');

    grid.insertAdjacentHTML('afterbegin', cards);
    wireUploadedFlyerPreview();
  }

  function wireUploadedFlyerPreview() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxMedia = lightbox?.querySelector('.lightbox-media');
    const lightboxImage = lightbox?.querySelector('img');
    const lightboxTitle = lightbox?.querySelector('h3');
    const lightboxType = lightbox?.querySelector('p');
    const openLightbox = project => {
      if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxType || !lightboxMedia) return;
      lightboxImage.src = project.dataset.image;
      lightboxImage.alt = project.dataset.title;
      lightboxTitle.textContent = project.dataset.title;
      lightboxType.textContent = project.dataset.type;
      lightboxMedia.className = `lightbox-media tone-${project.dataset.tone || 'dark'}`;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('.uploaded-flyer').forEach(project => {
      if (project.dataset.previewWired === 'true') return;
      project.dataset.previewWired = 'true';
      project.addEventListener('click', () => openLightbox(project));
      project.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(project);
        }
      });
    });
  }
})();
