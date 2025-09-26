// videos.js - filter by data-lang (all / hindi / urdu / kashmiri)
(function () {
  const select = document.getElementById('filter');
  if (!select) return;

  function applyFilter(value) {
    const cards = document.querySelectorAll('.video-card');
    cards.forEach(card => {
      const lang = card.dataset.lang; // "hindi" | "urdu" | "kashmiri"
      if (value === 'all' || lang === value) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // initial (show all)
  applyFilter(select.value || 'all');

  select.addEventListener('change', () => {
    applyFilter(select.value);
    // optional: scroll top of grid when filtering
    const grid = document.getElementById('videoGrid');
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
  });
})();
