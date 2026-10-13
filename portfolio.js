(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const narrow = matchMedia('(max-width: 760px)');
  const replay = $('#replay');
  const toggle = $('#motion-toggle');
  const status = $('#motion-status');
  const sections = [...document.querySelectorAll('main > section')];
  const gsap = window.gsap;
  let enabled = !reduced.matches && Boolean(gsap);
  let active;
  let intro;
  let observer;

  function cleanup() {
    intro?.kill();
    observer?.disconnect();
    sections.forEach(section => section.getAnimations({subtree:true}).forEach(animation => animation.cancel()));
    if (gsap) gsap.set('.hero-line,.profile-facts,.hero-contact,.photo-curtain', {clearProps:'all'});
    if (replay) replay.disabled = !enabled;
    document.body.dataset.intro = 'complete';
  }

  function animateScreen() {
    cleanup();
    if (!enabled) return;
    if (active.id === 'profile') {
      if (replay) replay.disabled = true;
      document.body.dataset.intro = 'playing';
      intro = gsap.timeline({onComplete:() => {
        if (replay) replay.disabled = false;
        document.body.dataset.intro = 'complete';
      }});
      intro.fromTo('.hero-line', {yPercent:110}, {yPercent:0,duration:.8,ease:'power4.out'}, 0)
        .fromTo('.profile-facts,.hero-contact', {opacity:0,y:8}, {opacity:1,y:0,duration:.5,stagger:.08}, .18)
        .fromTo('.photo-curtain', {scaleX:1}, {scaleX:0,duration:.95,ease:'power3.inOut'}, .1);
    }
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        const delay = entry.target.classList.contains('project-card') && !narrow.matches
          ? [...entry.target.parentElement.children].indexOf(entry.target) % 2 * 70 : 0;
        entry.target.animate([
          {opacity:.2,transform:'translateY(18px)'},
          {opacity:1,transform:'translateY(0)'}
        ], {duration:500,delay,easing:'cubic-bezier(.2,.75,.2,1)'});
      }
    }, {threshold:.06});
    active.querySelectorAll('.project-card,.experience-record').forEach(el => observer.observe(el));
  }

  function showScreen({focus = false} = {}) {
    const next = sections.find(section => '#'+section.id === location.hash) || sections[0];
    cleanup();
    active = next;
    sections.forEach(section => {section.hidden = section !== active;});
    document.body.dataset.screen = active.id;
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      if (link.hash === '#'+active.id) link.setAttribute('aria-current','page');
      else link.removeAttribute('aria-current');
    });
    const label = {profile:'소개',projects:'개인 프로젝트',experience:'실무 경력',activities:'외부활동 및 수상경력'}[active.id];
    document.title = label+' · 김수영'+(replay ? ' — POC' : '');
    window.scrollTo({top:0,behavior:'instant'});
    if (focus) {
      const heading = active.querySelector('h1,h2');
      heading.setAttribute('tabindex','-1');
      heading.focus({preventScroll:true});
    }
    animateScreen();
  }

  function updateMotion() {
    document.documentElement.classList.toggle('motion-disabled', !enabled);
    if (toggle) {
      toggle.setAttribute('aria-pressed',String(enabled));
      toggle.textContent = enabled ? '모션 켜짐' : '모션 꺼짐';
      toggle.disabled = reduced.matches || !gsap;
    }
    if (status && reduced.matches) status.textContent = '시스템의 동작 줄이기 설정이 적용되었습니다.';
    else if (status && !gsap) status.textContent = '정적 화면으로 표시합니다.';
    animateScreen();
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!sections.some(section => '#'+section.id === link.hash)) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null,'',link.hash);
    showScreen({focus:true});
  });
  window.addEventListener('popstate', () => showScreen({focus:true}));
  window.addEventListener('hashchange', () => {
    const destination = sections.find(section => '#'+section.id === location.hash) || sections[0];
    if (active !== destination) showScreen({focus:true});
  });
  replay?.addEventListener('click', () => {
    window.scrollTo({top:0,behavior:'instant'});
    animateScreen();
  });
  toggle?.addEventListener('click', () => {
    enabled = !enabled;
    updateMotion();
    status.textContent = enabled ? '모션을 켰습니다.' : '모션을 껐습니다.';
  });
  reduced.addEventListener('change', () => {enabled=!reduced.matches && Boolean(gsap);updateMotion();});
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && intro?.isActive()) intro.progress(1);
  });
  // Without JavaScript, all semantic sections remain available.
  showScreen();
  updateMotion();
})();
