    const hamburger = document.querySelector(".icon");
    const navMenu = document.querySelector(".nav-Links");
    hamburger.addEventListener("click", mobileMenu);
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    const navLink = document.querySelectorAll("li");
    navLink.forEach(n => n.addEventListener("click",closeMenu));
    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }