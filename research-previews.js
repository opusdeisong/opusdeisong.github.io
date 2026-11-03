(() => {
  const citations = [...document.querySelectorAll('.research-citation')];
  if (!citations.length) return;

  // Use the full publications page as the source of titles, venues, and figures.
  // The links still work normally if JavaScript or the request is unavailable.
  const publicationsURL = new URL('publications.html', document.baseURI);
  let publications;
  function getPublications() {
    if (!publications) {
      publications = fetch(publicationsURL)
        .then(response => response.ok ? response.text() : null)
        .then(html => html ? new DOMParser().parseFromString(html, 'text/html') : null)
        .catch(() => null);
    }
    return publications;
  }

  const preview = document.createElement('div');
  preview.id = 'research-preview';
  preview.className = 'research-preview';
  preview.setAttribute('role', 'tooltip');
  preview.hidden = true;
  document.body.append(preview);

  let activeCitation = null;
  let hideTimer;
  let touchInput = false;

  function dismiss() {
    clearTimeout(hideTimer);
    activeCitation?.removeAttribute('aria-describedby');
    activeCitation = null;
    preview.hidden = true;
  }

  function position() {
    if (!activeCitation || preview.hidden) return;
    const anchor = activeCitation.getBoundingClientRect();
    const box = preview.getBoundingClientRect();
    const gap = 8;
    preview.style.left = `${Math.max(12, Math.min(anchor.left, innerWidth - box.width - 12))}px`;
    const below = anchor.bottom + gap;
    preview.style.top = `${below + box.height <= innerHeight - 12
      ? below : Math.max(12, anchor.top - box.height - gap)}px`;
  }

  async function show(citation) {
    dismiss();
    activeCitation = citation;
    const papers = await getPublications();
    if (!papers || activeCitation !== citation) return;
    const id = new URL(citation.href).hash.slice(1);
    const paper = papers.getElementById(id);
    const paperTitle = paper?.querySelector('.pub-title');
    if (!paperTitle) return;

    const title = document.createElement('strong');
    title.className = 'research-preview-title';
    title.textContent = paperTitle.textContent.trim();
    const venue = document.createElement('p');
    venue.className = 'research-preview-venue';
    venue.textContent = [...paper.querySelectorAll('.venue-badge, .venue-note')]
      .map(node => node.textContent.trim()).join(' · ');
    preview.replaceChildren(title, venue);

    const sourceFigure = paper.querySelector('.pub-figure');
    if (sourceFigure) {
      const figure = document.createElement('img');
      figure.className = 'research-preview-figure';
      figure.src = new URL(sourceFigure.getAttribute('src'), publicationsURL).href;
      figure.alt = sourceFigure.alt;
      preview.append(figure);
    }
    citation.setAttribute('aria-describedby', preview.id);
    preview.hidden = false;
    position();
  }

  function deferDismiss() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      if (document.activeElement !== activeCitation) dismiss();
    }, 160);
  }

  for (const citation of citations) {
    citation.addEventListener('pointerdown', event => {
      touchInput = event.pointerType === 'touch';
      if (touchInput) dismiss();
    });
    citation.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch') {
        touchInput = false;
        show(citation);
      }
    });
    citation.addEventListener('pointerleave', deferDismiss);
    citation.addEventListener('focus', () => {
      if (!touchInput) show(citation);
    });
    citation.addEventListener('blur', dismiss);
    citation.addEventListener('click', dismiss);
  }

  preview.addEventListener('pointerenter', () => clearTimeout(hideTimer));
  preview.addEventListener('pointerleave', deferDismiss);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') dismiss();
    if (event.key === 'Tab') touchInput = false;
  });
  document.addEventListener('pointerdown', event => {
    if (!preview.contains(event.target) && !event.target.closest('.research-citation')) dismiss();
  });
  document.addEventListener('scroll', event => {
    if (!preview.contains(event.target)) dismiss();
  }, true);
  window.addEventListener('resize', dismiss);
  window.addEventListener('blur', dismiss);
})();
