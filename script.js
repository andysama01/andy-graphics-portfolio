const logoProjects = [
  {slug:'andy-graphics',src:'assets/logos/andy-graphics.webp',name:'Andy Graphics',industry:'Creative Services',group:'corporate',tone:'light'},
  {slug:'animedmerch',src:'assets/logos/animedmerch.webp',name:'AnimedMerch',industry:'Retail & Entertainment',group:'entertainment',tone:'light'},
  {slug:'chuksco-designs-construction',src:'assets/logos/chuksco-designs-construction.webp',name:'Chuksco Designs & Construction',industry:'Construction',group:'corporate',tone:'light'},
  {slug:'chyte',src:'assets/logos/chyte.webp',name:'Chyte',industry:'Consumer Brand',group:'corporate',tone:'light'},
  {slug:'tulipslogics',src:'assets/logos/tulipslogics.webp',name:'Tulipslogics',industry:'Logistics',group:'corporate',tone:'dark'},
  {slug:'xspacetrader',src:'assets/logos/xspacetrader.webp',name:'XSpaceTrader',industry:'Trading Platform',group:'technology',tone:'light'},
  {slug:'debbie-hairven',src:'assets/logos/debbie-hairven.webp',name:'Debbie Hairven',industry:'Hair & Beauty',group:'fashion',tone:'light'},
  {slug:'eazy-hire',src:'assets/logos/eazy-hire.webp',name:'Eazy Hire',industry:'Recruitment Marketplace',group:'technology',tone:'light'},
  {slug:'elite-buka-xperience',src:'assets/logos/elite-buka-xperience.webp',name:'Elite Buka Xperience',industry:'Food & Hospitality',group:'food',tone:'light'},
  {slug:'emmaus-scent',src:'assets/logos/emmaus-scent.webp',name:'Emmaus Scent',industry:'Fragrance',group:'fashion',tone:'light'},
  {slug:'fit-ins',src:'assets/logos/fit-ins.webp',name:'Fit-ins',industry:'Fashion & Apparel',group:'fashion',tone:'light'},
  {slug:'gt-electrical',src:'assets/logos/gt-electrical.webp',name:'G&T Electrical',industry:'Electrical Services',group:'corporate',tone:'light'},
  {slug:'gastrify',src:'assets/logos/gastrify.webp',name:'Gastrify',industry:'Food Technology',group:'food',tone:'brand'},
  {slug:'gem-unisex',src:'assets/logos/gem-unisex.webp',name:'Gem Unisex',industry:'Fashion & Beauty',group:'fashion',tone:'light'},
  {slug:'gerron-the-realtor',src:'assets/logos/gerron-the-realtor.webp',name:'Gerron the Realtor',industry:'Real Estate',group:'corporate',tone:'dark'},
  {slug:'golden-feathers',src:'assets/logos/golden-feathers.webp',name:'Golden Feathers',industry:'Premium Lifestyle',group:'fashion',tone:'dark'},
  {slug:'goldenminter',src:'assets/logos/goldenminter.webp',name:'Goldenminter',industry:'Finance & Investment',group:'technology',tone:'dark'},
  {slug:'happy-homes-realty',src:'assets/logos/happy-homes-realty.webp',name:'Happy Homes Realty',industry:'Real Estate',group:'corporate',tone:'dark'},
  {slug:'her-bloom',src:'assets/logos/her-bloom.webp',name:'Her Bloom',industry:'Women’s Wellness',group:'fashion',tone:'light'},
  {slug:'hitek-gadgets-hub',src:'assets/logos/hitek-gadgets-hub.webp',name:'Hitek Gadgets Hub',industry:'Consumer Technology',group:'technology',tone:'dark'},
  {slug:'icon-express-laundry',src:'assets/logos/icon-express-laundry.webp',name:'Icon Express Laundry',industry:'Laundry Services',group:'corporate',tone:'brand'},
  {slug:'james-benson',src:'assets/logos/james-benson.webp',name:'James Benson',industry:'Personal Brand',group:'corporate',tone:'dark'},
  {slug:'jewel-house-by-soma',src:'assets/logos/jewel-house-by-soma.webp',name:'Jewel House by Soma',industry:'Jewellery',group:'fashion',tone:'dark'},
  {slug:'joy-hope-foundation',src:'assets/logos/joy-hope-foundation.webp',name:'Joy & Hope Foundation',industry:'Nonprofit',group:'corporate',tone:'light'},
  {slug:'just-ask-gadget-store',src:'assets/logos/just-ask-gadget-store.webp',name:'Just Ask Gadget Store',industry:'Gadget Retail',group:'technology',tone:'light'},
  {slug:'kicks-beyond',src:'assets/logos/kicks-beyond.webp',name:'Kicks & Beyond',industry:'Footwear',group:'fashion',tone:'dark'},
  {slug:'le-reve-salon-spa',src:'assets/logos/le-reve-salon-spa.webp',name:'Le Rêve Salon & Spa',industry:'Beauty & Wellness',group:'fashion',tone:'light'},
  {slug:'campus-mirror',src:'assets/logos/campus-mirror.webp',name:'Campus Mirror',industry:'Campus Media',group:'entertainment',tone:'light'},
  {slug:'degods',src:'assets/logos/degods.webp',name:'DeGods',industry:'Entertainment',group:'entertainment',tone:'dark'},
  {slug:'guu-super-6',src:'assets/logos/guu-super-6.webp',name:'GUU Super 6',industry:'Sports Event',group:'entertainment',tone:'light'},
  {slug:'tashias-essence',src:'assets/logos/tashias-essence.webp',name:'Tashia’s Essence',industry:'Fragrance',group:'fashion',tone:'dark'},
  {slug:'miras-culinary',src:'assets/logos/miras-culinary.webp',name:'Mira’s Culinary',industry:'Food & Catering',group:'food',tone:'cream'},
  {slug:'miravid',src:'assets/logos/miravid.webp',name:'Miravid',industry:'Fashion Academy',group:'fashion',tone:'dark'},
  {slug:'og-foods',src:'assets/logos/og-foods.webp',name:'OG Foods',industry:'Food & Catering',group:'food',tone:'light'},
  {slug:'jo-threads',src:'assets/logos/jo-threads.webp',name:'JO Threads',industry:'Fashion & Tailoring',group:'fashion',tone:'dark'},
  {slug:'peace-bella',src:'assets/logos/peace-bella.webp',name:'Peace Bella',industry:'Fashion & Beauty',group:'fashion',tone:'light'},
  {slug:'pick-fit',src:'assets/logos/pick-fit.webp',name:'Pick & Fit',industry:'Fashion Retail',group:'fashion',tone:'light'},
  {slug:'playstation-arena',src:'assets/logos/playstation-arena.webp',name:'PlayStation Arena',industry:'Gaming & Entertainment',group:'entertainment',tone:'light'},
  {slug:'pondaa',src:'assets/logos/pondaa.webp',name:'Pondaa',industry:'Digital Brand',group:'technology',tone:'light'},
  {slug:'primewave-villa',src:'assets/logos/primewave-villa.webp',name:'PrimeWave Villa',industry:'Hospitality & Property',group:'corporate',tone:'light'},
  {slug:'abc-info-med',src:'assets/logos/abc-info-med.webp',name:'ABC Info Med',industry:'Health Technology',group:'technology',tone:'light'},
  {slug:'allgovpay',src:'assets/logos/allgovpay.webp',name:'AllgovPay',industry:'Fintech',group:'technology',tone:'light'},
  {slug:'empower-synergy',src:'assets/logos/empower-synergy.webp',name:'Empower Synergy',industry:'Renewable Energy',group:'corporate',tone:'dark'},
  {slug:'pyro-gadgets',src:'assets/logos/pyro-gadgets.webp',name:'Pyro Gadgets',industry:'Consumer Technology',group:'technology',tone:'light'},
  {slug:'raymas-foods',src:'assets/logos/raymas-foods.webp',name:'Rayma’s Foods',industry:'Food & Beverage',group:'food',tone:'light'},
  {slug:'reeftech-gadget-hub',src:'assets/logos/reeftech-gadget-hub.webp',name:'ReefTech Gadget Hub',industry:'Consumer Technology',group:'technology',tone:'brand'},
  {slug:'rene-gadgets',src:'assets/logos/rene-gadgets.webp',name:'Rene Gadgets',industry:'Consumer Technology',group:'technology',tone:'light'},
  {slug:'rogims',src:'assets/logos/rogims.webp',name:'Rogims',industry:'Restaurant & Catering',group:'food',tone:'light'},
  {slug:'roots-rhythm',src:'assets/logos/roots-rhythm.webp',name:'Roots & Rhythm',industry:'Music',group:'entertainment',tone:'light'},
  {slug:'safe',src:'assets/logos/safe.webp',name:'SAFE',industry:'Security & Technology',group:'technology',tone:'light'},
  {slug:'saenae',src:'assets/logos/saenae.webp',name:'Saenae',industry:'Fashion',group:'fashion',tone:'cream'},
  {slug:'saiza-landlords',src:'assets/logos/saiza-landlords.webp',name:'Saiza Landlords',industry:'Real Estate',group:'corporate',tone:'light'},
  {slug:'secrets-record-label',src:'assets/logos/secrets-record-label.webp',name:'Secrets Record Label',industry:'Music & Entertainment',group:'entertainment',tone:'light'},
  {slug:'tellerhost',src:'assets/logos/tellerhost.webp',name:'TellerHost',industry:'Web Hosting',group:'technology',tone:'brand'},
  {slug:'hivereserve',src:'assets/logos/hivereserve.webp',name:'HiveReserve Inc.',industry:'Digital Business',group:'technology',tone:'dark'},
  {slug:'equity-capital-trade',src:'assets/logos/equity-capital-trade.webp',name:'Equity Capital Trade',industry:'Finance & Trading',group:'technology',tone:'light'},
  {slug:'natural-red-oils',src:'assets/logos/natural-red-oils.webp',name:'Natural Red Oils',industry:'Beauty & Wellness',group:'fashion',tone:'light'}
];

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const logoGrid = document.getElementById('logo-grid');
if (logoGrid) {
  logoGrid.innerHTML = logoProjects.map(project => `
    <article class="logo-project reveal" tabindex="0"
      data-logo-category="${project.group}"
      data-image="${project.src}"
      data-title="${project.name.replaceAll('&','&amp;')}"
      data-type="${project.industry} — Logo Design"
      data-tone="${project.tone}">
      <div class="logo-media tone-${project.tone}">
        <img src="${project.src}" alt="${project.name.replaceAll('&','&amp;')} logo design" loading="lazy">
      </div>
      <div class="logo-caption">
        <div><p>${project.industry}</p><h3>${project.name.replaceAll('&','&amp;')}</h3></div>
        <span>View</span>
      </div>
    </article>`).join('');
}

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), {threshold: .08, rootMargin: '0px 0px 100px'});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const portfolioFilters = document.querySelectorAll('.work .filter');
const portfolioProjects = document.querySelectorAll('.portfolio-grid .project');
portfolioFilters.forEach(button => button.addEventListener('click', () => {
  portfolioFilters.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  const value = button.dataset.filter;
  portfolioProjects.forEach(project => {
    const match = value === 'all' || project.dataset.category.split(' ').includes(value);
    project.classList.toggle('hidden', !match);
  });
}));

const logoFilters = document.querySelectorAll('.logo-filter');
const logoCards = document.querySelectorAll('.logo-project');
logoFilters.forEach(button => button.addEventListener('click', () => {
  logoFilters.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  const value = button.dataset.logoFilter;
  logoCards.forEach(card => card.classList.toggle('hidden', value !== 'all' && card.dataset.logoCategory !== value));
}));

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
  lightboxImage.alt = project.dataset.title;
  lightboxTitle.textContent = project.dataset.title;
  lightboxType.textContent = project.dataset.type;
  lightboxMedia.className = `lightbox-media tone-${project.dataset.tone || 'dark'}`;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

document.querySelectorAll('.project, .logo-project').forEach(project => {
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
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

document.addEventListener('mousemove', e => {
  const glow = document.querySelector('.cursor-glow');
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});
