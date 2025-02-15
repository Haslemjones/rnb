
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () =>{
    navLinks.classList.toggle("show");

    const isopen= navLinks.classList.contains("show");
        menuBtnIcon.setAttribute("class", isopen ? "ri-close-line": "ri-menu-search-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("show");
    menuBtnIcon.setAttribute("class", "ri-menu-search-line");
});

document.addEventListener("DOMContentLoaded", ()=>{
    const aboutsection = document.querySelector(".about-content");

    function revealOnScroll() {
        const sectionPos = aboutsection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos){
            aboutsection.classList.add("show");
        }
    }
    window.addEventListener("scroll", revealOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSections = document.querySelectorAll(".about-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.4 } // Trigger when 30% of the section is visible
    );

    aboutSections.forEach((section) => observer.observe(section));
});
