headerHomeM.addEventListener("click", () => {
    sliderSwitcherPage(0);
    stylingNavMenuActive(headerHomeM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerHome, 'nav');
      counter.count = 0;
});
headerAboutUsM.addEventListener("click", () => {
    sliderSwitcherPage(100);
    stylingNavMenuActive(headerAboutUsM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerAboutUs, 'nav');
      counter.count = 1;
});
headerVacanciesM.addEventListener("click", () => {
    sliderSwitcherPage(200);
    stylingNavMenuActive(headerVacanciesM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerVacancies, 'nav');
      counter.count = 2;
});
headerContactsM.addEventListener("click", () => {
    sliderSwitcherPage(300);
    stylingNavMenuActive(headerContactsM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerContacts, 'nav');
      counter.count = 3;
});
arrowButtonNext.addEventListener("click", moveSliderPageByNumberFromCounterPages);
