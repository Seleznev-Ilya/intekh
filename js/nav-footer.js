headerHomeM.addEventListener("click", () => {
    sliderSwitcherPage(0);
    stylingNavMenuActive(headerHomeM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerHome, 'nav');
    counter.count = 0;
    navFooterInner.style.transform = `translateX(${0}vw)`;
    headerHomeM.style.borderTop = '1px solid #eeeeee6b';
    headerAboutUsM.style.borderTop = '1px solid transparent';
    headerVacanciesM.style.borderTop = '1px solid transparent';
    headerContactsM.style.borderTop = '1px solid transparent';
});
headerAboutUsM.addEventListener("click", () => {
    sliderSwitcherPage(100);
    stylingNavMenuActive(headerAboutUsM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerAboutUs, 'nav');
    counter.count = 1;
    navFooterInner.style.transform = `translateX(${0}vw)`;
    headerHomeM.style.borderTop = '1px solid transparent';
    headerAboutUsM.style.borderTop = '1px solid #eeeeee6b';
    headerVacanciesM.style.borderTop = '1px solid transparent';
    headerContactsM.style.borderTop = '1px solid transparent';
});
headerVacanciesM.addEventListener("click", () => {
    sliderSwitcherPage(200);
    stylingNavMenuActive(headerVacanciesM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerVacancies, 'nav');
    counter.count = 2;
    navFooterInner.style.transform = `translateX(-${15}vw)`;
    headerHomeM.style.borderTop = '1px solid transparent';
    headerAboutUsM.style.borderTop = '1px solid transparent';
    headerVacanciesM.style.borderTop = '1px solid #eeeeee6b';
    headerContactsM.style.borderTop = '1px solid transparent';
});
headerContactsM.addEventListener("click", () => {
    sliderSwitcherPage(300);
    stylingNavMenuActive(headerContactsM, 'nav-footer__Mobile');
    stylingNavMenuActive(headerContacts, 'nav');
    counter.count = 3;
    navFooterInner.style.transform = `translateX(-${15}vw)`;
    headerHomeM.style.borderTop = '1px solid transparent';
    headerAboutUsM.style.borderTop = '1px solid transparent';
    headerVacanciesM.style.borderTop = '1px solid transparent';
    headerContactsM.style.borderTop = '1px solid #eeeeee6b';
});
arrowButtonNext.addEventListener("click", moveSliderPageByNumberFromCounterPages);
// border-top: 1px solid #eeeeee6b;
