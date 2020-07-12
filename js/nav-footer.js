let headerHomeM = document.querySelector('.header__homeM'),
    headerAboutUsM = document.querySelector('.header__aboutUsM'),
    headerVacanciesM = document.querySelector('.header__vacanciesM'),
    headerContactsM = document.querySelector('.header__contactsM');
let arrowButtonNext = document.querySelector('.footer__img');

headerHomeM.addEventListener("click", () => sliderSwitcherPage(0));
headerAboutUsM.addEventListener("click", () => sliderSwitcherPage(100));
headerVacanciesM.addEventListener("click", () => sliderSwitcherPage(200));
headerContactsM.addEventListener("click", () => sliderSwitcherPage(300));
arrowButtonNext.addEventListener("click", () => sliderSwitcherPage(300));
