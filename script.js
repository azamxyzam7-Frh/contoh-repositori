const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.article-card')];
const noResults = document.getElementById('noResults');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  themeToggle.textContent =
    document.body.classList.contains('dark') ? '☾' : '☼';
});

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  let visible = 0;

  cards.forEach(card => {
    const text = (
      card.dataset.search + ' ' + card.innerText
    ).toLowerCase();

    const show = !q || text.includes(q);

    card.style.display = show ? '' : 'none';

    if (show) {
      visible++;
    }
  });

  noResults.style.display = visible ? 'none' : 'block';
});

document.getElementById('year').textContent =
  new Date().getFullYear();
