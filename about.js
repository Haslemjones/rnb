const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () =>{
    navLinks.classList.toggle("show");

    const isopen= navLinks.classList.contains("show");
        menuBtnIcon.setAttribute("class", isopen ? "ri-close-line": "ri-menu-unfold-4-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("show");
    menuBtnIcon.setAttribute("class", "ri-menu-unfold-4-line");
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutPage = document.querySelector(".about-page");

    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let duration = Math.random() * 3 + 2; // 2 to 5 seconds

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animationDuration = `${duration}s`;

        aboutPage.appendChild(particle);

        setTimeout(() => { particle.remove(); }, duration * 1000);
    }

    setInterval(createParticle, 500);
});