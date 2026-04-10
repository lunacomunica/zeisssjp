// Testimonials carousel — 3 visible, slide 1 at a time
(function() {
  const track = document.getElementById('depsTrack');
  if (!track) return;
  const cards = Array.from(track.querySelectorAll('.dep-card'));
  const total = cards.length;
  const visible = 3;
  const maxStep = total - visible;
  let step = 0;
  let autoTimer;

  function getStepWidth() {
    const gap = 20;
    const stageW = track.parentElement.getBoundingClientRect().width;
    return (stageW - gap * (visible - 1)) / visible + gap;
  }

  function update(animate) {
    track.style.transition = animate === false ? 'none' : 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)';
    track.style.transform = 'translateX(-' + (step * getStepWidth()) + 'px)';
  }

  function next() { step = step >= maxStep ? 0 : step + 1; update(true); }
  function prev() { step = step <= 0 ? maxStep : step - 1; update(true); }

  function startAuto() { autoTimer = setInterval(next, 3500); }
  function stopAuto() { clearInterval(autoTimer); }

  document.getElementById('depsNext').addEventListener('click', () => { stopAuto(); next(); startAuto(); });
  document.getElementById('depsPrev').addEventListener('click', () => { stopAuto(); prev(); startAuto(); });

  window.addEventListener('resize', () => update(false));
  update(false);
  startAuto();
})();

// Reveal on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
});

function updateLabel(input) {
  const label = document.getElementById('upload-text');
  label.textContent = input.files[0] ? '✓ ' + input.files[0].name : 'Anexar receita (opcional)';
}

function handleForm(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const tel = document.getElementById('tel').value;
  const msg = `Olá! Gostaria de fazer um orçamento. Segue minha receita em anexo.\n\nNome: ${nome}\nWhatsApp: ${tel}`;
  window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(msg)}`, '_blank');
}
