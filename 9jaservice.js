const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () =>{
    navLinks.classList.toggle("active");

    const isopen= navLinks.classList.contains("show");
        menuBtnIcon.setAttribute("class", isopen ? "ri-close-line": "ri-menu-unfold-4-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("active");
    menuBtnIcon.setAttribute("class", "ri-menu-unfold-4-line");
});

