function scrollToContact(sectionId) {
    const targetElement = document.getElementById(sectionId);
    const navBar = document.getElementById('ma-barre-nav-fixe');
    const headerHeight = -650;

if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;     
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}
function scrollToAboutMe(sectionId) {
   const targetElement = document.getElementById(sectionId);
    const navBar = document.getElementById('ma-barre-nav-fixe');
    const headerHeight = -260;

if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;     
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    } 
}

function scrollToMywork(sectionId) {
   const targetElement = document.getElementById(sectionId);
    const navBar = document.getElementById('ma-barre-nav-fixe');
    const headerHeight = -1860;

if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;     
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    } 
}

const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
