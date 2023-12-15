
// change navbar style on scroll 
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
})


// faq show and hide 
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        // icon change 
        const icon = faq.querySelector(".faq_icon i");
        if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus";
        }else {
            icon.className = "fa-solid fa-plus";
        };
    });
});

// toggle nav bar 
const menu = document.querySelector(".nav_menu");
const openMenu = document.querySelector("#open_btn");
const closeMenu = document.querySelector("#close_btn");

openMenu.addEventListener("click", () => {
    menu.style.display = "flex";
    closeMenu.style.display = "inline-block";
    openMenu.style.display = "none";
})

closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "inline-block";
})


