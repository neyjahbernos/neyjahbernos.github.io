function scrollToContact(sectionId) {
    const targetElement = document.getElementById(sectionId);
    const navBar = document.getElementById('ma-barre-nav-fixe');
    const headerHeight = -80;

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
    const headerHeight = 100;

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

// fonction générée par ia v
window.addEventListener('load', () => {
  const minDuration = 2500;
  const startTime = performance.now();

  const elapsed = performance.now() - startTime;
  const remaining = Math.max(0, minDuration - elapsed);

  setTimeout(() => {
  }, remaining);
});
 window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const img = document.getElementById('loader-img');

  setTimeout(() => {
    img.classList.add('done'); 
    loader.classList.add('hide'); 

    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }, 400);

  }, 3000);
});

const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
