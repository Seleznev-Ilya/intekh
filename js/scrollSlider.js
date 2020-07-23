let elem = sliderSwitcherG;
if (elem.addEventListener) {
    if ('onwheel' in document) {// IE9+, FF17+
        elem.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {// устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
    } else {// Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
    }
} else { // IE8-
    elem.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
    e = e || window.event;
    if (event.shiftKey) {
        if (e.deltaY > 0) {
            moveSliderPageByNumberFromCounterPages();
        } else {
            let from = elem.style.transform.indexOf('(') + 1;
            let to = elem.style.transform.indexOf('v');
            let numberP;
            if (elem.style.transform.slice(from, to) === 0) {
                numberP = 0;
            } else {
                numberP = -1 * (elem.style.transform.slice(from, to) / 100);
            }
            console.log(numberP);
            --numberP;
            console.log(numberP);
            switch (numberP) {
                case 1:
                    sliderSwitcherPage(100);
                    stylingNavMenuActive(headerAboutUsM, 'nav-footer__Mobile');
                    stylingNavMenuActive(headerAboutUs, 'nav');
                    counter.count = 1;
                    break;
                case 2:
                    sliderSwitcherPage(200);
                    stylingNavMenuActive(headerVacanciesM, 'nav-footer__Mobile');
                    stylingNavMenuActive(headerVacancies, 'nav');
                    counter.count = 2;
                    break;
                case 3:
                    sliderSwitcherPage(300);
                    stylingNavMenuActive(headerContactsM, 'nav-footer__Mobile');
                    stylingNavMenuActive(headerContacts, 'nav');
                    counter.count = 3;
                    break;
                default:
                    sliderSwitcherPage(0);
                    stylingNavMenuActive(headerHomeM, 'nav-footer__Mobile');
                    stylingNavMenuActive(headerHome, 'nav');
                    counter.count = 0;
            }
        }
    }
}
