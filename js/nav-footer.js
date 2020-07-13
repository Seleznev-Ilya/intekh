headerHomeM.addEventListener("click", () => {
    sliderSwitcherPage(0);
    stylingNavMenuActive(headerHomeM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerHome, 'nav');
});
headerAboutUsM.addEventListener("click", () => {
    sliderSwitcherPage(100);
    stylingNavMenuActive(headerAboutUsM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerAboutUs, 'nav');
});
headerVacanciesM.addEventListener("click", () => {
    sliderSwitcherPage(200);
    stylingNavMenuActive(headerVacanciesM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerVacancies, 'nav');
});
headerContactsM.addEventListener("click", () => {
    sliderSwitcherPage(300);
    stylingNavMenuActive(headerContactsM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerContacts, 'nav');
});
arrowButtonNext.addEventListener("click", moveSliderPageByNumberFromCounterPages);
