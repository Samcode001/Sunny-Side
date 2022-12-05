console.log("Hello");

let primaryNav = document.querySelector(".primary-navigation");
let mobileNav = document.querySelector(".mobile-nav-toggle");

mobileNav.addEventListener("click", () => {
    
    primaryNav.hasAttribute("data-visible") ? mobileNav.setAttribute("aria-expanded", true) : mobileNav.setAttribute("aria-expanded", false);
    
    primaryNav.toggleAttribute("data-visible");
})