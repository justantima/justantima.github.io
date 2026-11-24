
// ==================================
// 1. TYPING ANIMATION
// ==================================

const heading = document.querySelector(".hero h2");

if (heading) {
    const roles = [
        "Aspiring AI & Machine Learning Engineer",
        "Python & Data Science Enthusiast",
        "Exploring Artificial Intelligence",
        "Future Machine Learning Developer"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (!deleting) {
            characterIndex++;

            heading.textContent =
                currentRole.substring(0, characterIndex);

            if (characterIndex === currentRole.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {
            characterIndex--;

            heading.textContent =
                currentRole.substring(0, characterIndex);

            if (characterIndex === 0) {
                deleting = false;

                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, deleting ? 45 : 85);
    }

    typeEffect();
}


// ==================================
// 2. AUTOMATIC COPYRIGHT YEAR
// ==================================

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Antima Yadav | AI & ML Portfolio`;
}


// ==================================
// 3. SCROLL REVEAL ANIMATION
// ==================================

const animatedElements = document.querySelectorAll(
    "section, .skill, .project-card"
);

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});


// ==================================
// 4. MOBILE MENU SCROLL SUPPORT
// ==================================

document.querySelectorAll('nav a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

