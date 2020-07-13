headerHome.addEventListener("click", () => {
    sliderSwitcherPage(0);
    stylingNavMenuActive(headerHome, 'nav');
    stylingNavMenuActive(headerHomeM, 'nav-footer__Mobile');
    counter.count = 0;
    navFooterInner.style.transform = `translateX(${0}vw)`;
});
headerAboutUs.addEventListener("click", () => {
    sliderSwitcherPage(100);
    stylingNavMenuActive(headerAboutUs, 'nav');
    stylingNavMenuActive(headerAboutUsM, 'nav-footer__Mobile');
    counter.count = 1;
    navFooterInner.style.transform = `translateX(${0}vw)`;
});
headerVacancies.addEventListener("click", () => {
    sliderSwitcherPage(200);
    stylingNavMenuActive(headerVacancies, 'nav');
    stylingNavMenuActive(headerVacanciesM, 'nav-footer__Mobile');
    counter.count = 2;
    navFooterInner.style.transform = `translateX(-${15}vw)`;
});
headerContacts.addEventListener("click", () => {
    sliderSwitcherPage(300);
    stylingNavMenuActive(headerContacts, 'nav');
    stylingNavMenuActive(headerContactsM, 'nav-footer__Mobile');
    counter.count = 3;
    navFooterInner.style.transform = `translateX(-${15}vw)`;

});

