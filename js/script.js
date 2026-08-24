
/* =========================================================
   ANDRÉS LANCHIMBA — PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================
   1. SCROLL REVEAL
   ========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   2. SMOOTH NAVIGATION
   ========================= */

const navigationLinks = document.querySelectorAll(
    '.nav-links a, .logo, .btn-secondary'
);


navigationLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================
   3. CURRENT YEAR
   ========================= */

const yearElement = document.querySelector(".footer-container span");

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} Andrés Lanchimba`;

}

