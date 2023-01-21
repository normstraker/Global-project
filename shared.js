// when .hamburger--nav__toggle is clicked then show .hamburger--nav__links and hide .hamburger--nav__toggle and show .hamburger--nav__toggle__selected

// when .hamburger--nav__toggle__selected is clicked then hide .hamburger--nav__links and show .hamburger--nav__toggle

const bars = document.querySelector(".hamburger--nav__toggle");
const xClose = document.querySelector(".hamburger--nav__toggle__selected");
const links = document.querySelector(".hamburger--nav__links");
const toggleClass = () => {
    links.classList.toggle("hidden");
    bars.classList.toggle("hidden");
    xClose.classList.toggle("hidden");
};
bars.addEventListener("click", toggleClass);
xClose.addEventListener("click", toggleClass);
