// Simple hero slider (next/prev)
const slides = document.querySelectorAll('.hero-slide');
const nextBtn = document.getElementById('nextHero');
const prevBtn = document.getElementById('prevHero');
let idx = 0;

function showSlide(i){
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
}

if(nextBtn && prevBtn){
  nextBtn.addEventListener('click', ()=> {
    idx = (idx + 1) % slides.length;
    showSlide(idx);
  });
  prevBtn.addEventListener('click', ()=> {
    idx = (idx - 1 + slides.length) % slides.length;
    showSlide(idx);
  });

  // auto rotate every 6s
  setInterval(()=> {
    idx = (idx + 1) % slides.length;
    showSlide(idx);
  }, 6000);
}

// simple form handler (demo)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Дякуємо! Ваше повідомлення надіслано (демо).');
    form.reset();
  });
}
