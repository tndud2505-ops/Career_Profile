(function () {
  document.documentElement.classList.add("js");
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.getElementById("site-menu");
  const year = document.getElementById("current-year");
  const mobileMenuQuery = window.matchMedia("(max-width: 760px)");
  let closeMobileMenu = () => {};

  if (year) year.textContent = String(new Date().getFullYear());

  if (menuButton && menu) {
    const setMenuState = (expanded) => {
      const isMobile = mobileMenuQuery.matches;
      const isExpanded = isMobile ? expanded : true;
      menuButton.setAttribute("aria-expanded", String(isExpanded));
      menuButton.setAttribute(
        "aria-label",
        isExpanded ? "메뉴 닫기" : "메뉴 열기",
      );
      menu.classList.toggle("is-collapsed", !isExpanded);
    };
    closeMobileMenu = () => setMenuState(false);

    setMenuState(false);
    window.requestAnimationFrame(() => setMenuState(false));
    window.addEventListener("load", () => setMenuState(false));
    window.addEventListener("resize", () => setMenuState(false));
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      setMenuState(!isExpanded);
    });

    menu.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (link && mobileMenuQuery.matches) {
        closeMobileMenu();
      }
    });

    mobileMenuQuery.addEventListener("change", () => setMenuState(false));
  }

  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const setCurrentNav = (currentLink) => {
    navLinks.forEach((link) => {
      const isCurrent = link === currentLink;
      link.classList.toggle("is-current", isCurrent);
      if (isCurrent) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };
  let programmaticNav = null;

  const initialHash = window.location.hash;
  let initialRoutePending = Boolean(initialHash);
  const initialNav = navLinks.find(
    (link) => link.getAttribute("href") === initialHash,
  );
  if (initialNav) setCurrentNav(initialNav);

  const settleInitialHash = () => {
    if (!initialHash) return;
    const target = document.getElementById(initialHash.slice(1));
    if (!target) return;
    target.scrollIntoView({ block: "start", behavior: "auto" });
    setCurrentNav(
      navLinks.find(
        (link) => link.getAttribute("href") === initialHash,
      ),
    );
    window.setTimeout(() => {
      if (window.location.hash === initialHash) {
        setCurrentNav(
          navLinks.find(
            (link) => link.getAttribute("href") === initialHash,
          ),
        );
      }
      initialRoutePending = false;
    }, 300);
  };
  window.addEventListener("load", () => {
    window.requestAnimationFrame(settleInitialHash);
  });

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (initialRoutePending || programmaticNav) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        setCurrentNav(
          navLinks.find(
            (link) => link.getAttribute("href") === `#${visible.target.id}`,
          ),
        );
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.getElementById(link.getAttribute("href").slice(1));
      if (!target) return;
      event.preventDefault();
      programmaticNav = link;
      setCurrentNav(link);
      closeMobileMenu();
      history.replaceState(null, "", link.getAttribute("href"));
      target.scrollIntoView({
        block: "start",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
      window.setTimeout(() => {
        if (programmaticNav !== link) return;
        setCurrentNav(link);
        programmaticNav = null;
      }, 900);
    });
  });

  const projectTabs = [...document.querySelectorAll("[data-project-filter]")];
  const projectCards = [
    ...document.querySelectorAll("[data-project-category]"),
  ];
  const projectPanel = document.getElementById("project-panel");

  const applyProjectFilter = (selectedTab) => {
    const selectedFilter = selectedTab.dataset.projectFilter;

    projectTabs.forEach((item) => {
      const isSelected = item === selectedTab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
      item.tabIndex = isSelected ? 0 : -1;
    });

    projectCards.forEach((card) => {
      const isVisible =
        selectedFilter === "all" ||
        card.dataset.projectCategory === selectedFilter;
      card.hidden = !isVisible;
    });

    if (projectPanel) {
      projectPanel.setAttribute("aria-labelledby", selectedTab.id);
    }
  };

  projectTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => applyProjectFilter(tab));
    tab.addEventListener("keydown", (event) => {
      const keyMoves = { ArrowLeft: -1, ArrowRight: 1 };
      if (
        !(event.key in keyMoves) &&
        event.key !== "Home" &&
        event.key !== "End"
      ) {
        return;
      }

      event.preventDefault();
      const nextIndex =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? projectTabs.length - 1
            : (index + keyMoves[event.key] + projectTabs.length) %
              projectTabs.length;
      projectTabs[nextIndex].focus();
      applyProjectFilter(projectTabs[nextIndex]);
    });
  });

  if (projectTabs.length) applyProjectFilter(projectTabs[0]);
})();
