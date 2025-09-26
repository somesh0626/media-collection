// translations.js
// Works with your HTML: select id="language-select" and language blocks with class="lang-content" and ids: english, tamil, hindi, urdu, kashmiri

function switchLanguage(lang) {
  // hide all language blocks
  const blocks = document.querySelectorAll('.lang-content');
  blocks.forEach(b => {
    b.style.display = 'none';
  });

  // show the requested block
  const active = document.getElementById(lang);
  if (active) {
    active.style.display = 'block';
  }

  // adjust text direction & alignment for RTL languages
  // (Urdu and Kashmiri in your content use Perso-Arabic; enable RTL)
  const container = document.querySelector('.detail-container') || document.body;
  if (!container) return;

  if (lang === 'urdu' || lang === 'kashmiri') {
    container.dir = 'rtl';
    // also set text alignment for visible block (keeps labels/buttons LTR if needed)
    if (active) active.style.textAlign = 'right';
  } else {
    container.dir = 'ltr';
    if (active) active.style.textAlign = 'left';
  }
}

// initialize on load
window.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('language-select');
  if (!sel) return;

  // make sure default exists and show it
  const defaultLang = sel.value || 'english';
  switchLanguage(defaultLang);

  // keep inline onchange working, but also attach a listener (optional)
  sel.addEventListener('change', (e) => switchLanguage(e.target.value));
});
