(() => {
  const MOTION_TARGETS = [
    ".scene",
    ".beam",
    ".paper-a",
    ".paper-b",
    ".book-stack",
    ".character",
    ".head",
    ".ear-l",
    ".ear-r",
    ".eyes",
    ".book-shell",
    ".page-turn",
    ".page-lines",
    ".page-turn-lines",
    ".bookmark",
    ".pencil",
    ".spark",
  ];

  function stopCssFallback(root) {
    root.querySelectorAll(MOTION_TARGETS.join(", ")).forEach((node) => {
      node.style.animation = "none";
    });
  }

  function initHeroMotion() {
    const root = document.querySelector(".hero-study-art");
    if (!root || root.dataset.motionReady === "true") return;

    root.dataset.motionReady = "true";
    stopCssFallback(root);

    if (!window.gsap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap } = window;
    const scene = root.querySelector(".scene");
    const beam = root.querySelector(".beam");
    const paperA = root.querySelector(".paper-a");
    const paperB = root.querySelector(".paper-b");
    const bookStack = root.querySelector(".book-stack");
    const character = root.querySelector(".character");
    const head = root.querySelector(".head");
    const earLeft = root.querySelector(".ear-l");
    const earRight = root.querySelector(".ear-r");
    const eyes = root.querySelector(".eyes");
    const bookShell = root.querySelector(".book-shell");
    const pageTurn = root.querySelector(".page-turn");
    const pageLines = root.querySelector(".page-lines");
    const pageTurnLines = root.querySelector(".page-turn-lines");
    const bookmark = root.querySelector(".bookmark");
    const pencil = root.querySelector(".pencil");
    const sparks = root.querySelectorAll(".spark");

    if (!scene || !character || !bookShell || !pageTurn) return;

    gsap.set(root, { transformOrigin: "50% 50%" });
    gsap.set(pageTurn, {
      transformBox: "fill-box",
      transformOrigin: "0% 10%",
    });
    gsap.set(eyes, { transformOrigin: "50% 50%" });
    gsap.set([pageLines, pageTurnLines], { strokeDashoffset: 0 });

    gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 3.4, ease: "sine.inOut" },
    })
      .to(scene, { y: 10 }, 0)
      .to(beam, { x: -10, y: 6, opacity: 0.68 }, 0)
      .to(paperA, { y: -10, rotation: 2.5 }, 0)
      .to(paperB, { y: 8, rotation: 1.2 }, 0)
      .to(bookStack, { y: -4, rotation: 1.4 }, 0)
      .to(character, { y: 6 }, 0)
      .to(head, { rotation: -1.25 }, 0)
      .to(earLeft, { rotation: -2.5 }, 0)
      .to(earRight, { rotation: 2.2 }, 0)
      .to(bookShell, { y: 3 }, 0)
      .to(bookmark, { y: 1, rotation: 4, duration: 2.1 }, 0)
      .to(pencil, { y: -4, x: -2, duration: 2.1 }, 0)
      .to(sparks, { scale: 1.1, opacity: 0.72, stagger: 0.15, duration: 1.8 }, 0.2);

    gsap.timeline({ repeat: -1, repeatDelay: 2.5 })
      .to(eyes, { scaleY: 0.16, duration: 0.08, ease: "power1.in" })
      .to(eyes, { scaleY: 1, duration: 0.12, ease: "power1.out" })
      .to(eyes, { scaleY: 0.22, duration: 0.07, ease: "power1.in" }, 0.26)
      .to(eyes, { scaleY: 1, duration: 0.1, ease: "power1.out" }, 0.33);

    gsap.fromTo(
      pageLines,
      { strokeDashoffset: 0 },
      { strokeDashoffset: -96, duration: 3.2, ease: "none", repeat: -1 }
    );

    gsap.timeline({ repeat: -1, repeatDelay: 0.72 })
      .set(pageTurn, {
        x: 10,
        y: 4,
        rotation: 0,
        scaleX: 1.02,
        skewY: 0,
        opacity: 0,
      })
      .set(pageTurnLines, { strokeDashoffset: 0, opacity: 0.48 })
      .to(pageTurn, { opacity: 1, duration: 0.14, ease: "power2.out" })
      .to(
        pageTurn,
        {
          x: -34,
          y: -24,
          rotation: -18,
          scaleX: 0.66,
          skewY: -5,
          duration: 0.78,
          ease: "power2.inOut",
        },
        0.12
      )
      .to(
        pageTurnLines,
        {
          strokeDashoffset: -88,
          opacity: 0.72,
          duration: 0.78,
          ease: "none",
        },
        0.12
      )
      .to(
        pageTurn,
        {
          x: -18,
          y: -11,
          rotation: -10,
          scaleX: 0.82,
          skewY: -2,
          duration: 0.34,
          ease: "power2.out",
        }
      )
      .to(
        pageTurn,
        {
          x: 10,
          y: 5,
          rotation: 0,
          scaleX: 1.02,
          skewY: 0,
          opacity: 0,
          duration: 0.24,
          ease: "power1.in",
        }
      );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeroMotion, { once: true });
  } else {
    initHeroMotion();
  }
})();
