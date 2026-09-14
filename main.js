/* HOUSE BARBEARIA — interações */
(function () {
  'use strict';

  var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Topo sólido ao rolar ───────────────────────────── */
  var topo = document.getElementById('topo');
  var ultimo = -1;
  function aoRolar() {
    var fixo = window.scrollY > 40;
    if (fixo !== ultimo) { topo.classList.toggle('fix', fixo); ultimo = fixo; }
  }
  aoRolar();
  window.addEventListener('scroll', aoRolar, { passive: true });

  /* ── Menu mobile ────────────────────────────────────── */
  var botao = document.getElementById('menu');
  var nav = document.getElementById('nav');
  function fechar() {
    nav.classList.remove('open');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
  }
  botao.addEventListener('click', function () {
    var aberto = nav.classList.toggle('open');
    botao.setAttribute('aria-expanded', String(aberto));
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') fechar(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });

  /* ── Revelação ao rolar ─────────────────────────────── */
  var alvos = document.querySelectorAll('.js-rev');
  if (semMovimento || !('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('vis'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('vis'); obs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    alvos.forEach(function (el) { obs.observe(el); });
  }

  /* ── Vídeos: só carregam e tocam quando visíveis ────── */
  var videos = document.querySelectorAll('video');
  function ligar(v) {
    if (v.dataset.pronto !== '1') { v.load(); v.dataset.pronto = '1'; }
    var p = v.play();
    if (p && p.catch) p.catch(function () { /* autoplay bloqueado: fica o poster */ });
  }
  if ('IntersectionObserver' in window) {
    var obsV = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { if (!semMovimento) ligar(en.target); }
        else if (!en.target.paused) { en.target.pause(); }
      });
    }, { threshold: 0.25 });
    videos.forEach(function (v) { obsV.observe(v); });
  } else if (!semMovimento) {
    videos.forEach(ligar);
  }

  /* ── Economia de dados ──────────────────────────────── */
  if (navigator.connection && navigator.connection.saveData) {
    videos.forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); });
  }

  /* ── Ano do rodapé ──────────────────────────────────── */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
