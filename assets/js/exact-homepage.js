(() => {
  "use strict";

  const button = document.querySelector(".menu-button");
  const nav = document.querySelector("#mobile-nav");

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    }
  });
})();
