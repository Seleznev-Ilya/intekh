/*сдвигать только H1 с описанием во второй странице
* не весь блок о нас, попрвить стили и се, запустить функцию*/
function appearAboutUsOnHome() {
    let aboutUs = document.querySelector('.aboutUs');
    return aboutUs.classList.toggle('aboutUs__showHome');
}

appearAboutUsOnHome();

/*Get "i" like number and move pageSlider*/
function sliderSwitcherPage(i) {
    if (i < 100 && appearAboutUsOnHome() === false) {
        appearAboutUsOnHome();
    } else if (i === 100 && appearAboutUsOnHome() === true) {
        appearAboutUsOnHome();
    }
    let sliderSwitcher = document.querySelector('.document__inner');
    sliderSwitcher.style.transform = `translateX(-${i}vw)`;
}

/*Painting active item by active class in nav menu*/
function stylingNavMenuActive(classNav, parent) {
    let nav = document.querySelectorAll(`.${parent}`);
    let navMenu = nav[0].children[0].children;

    for (let key of navMenu) {
        for (let key1 of key.classList) {
            if (key1 === 'active') {
                key.classList.remove("active");
            }
        }
    }
    classNav.classList.add('active');
}

/*Arrow interaction with nov, nav-footer*/
function CounterPages() {
    this.count = 0;
    this.next = function () {
        return ++this.count;
    };
    this.zero = function (n = -1) {
        return this.count = n;
    };
}

let counter = new CounterPages();

/*Check quantity of page in slider
*if more then our 0,1,2,3 pages then make start from -1 (this.zero)
* to make 0 by pre increment */
function getNumberFromCounterPages() {
    let page = counter.next();
    if (page < 3) {
        return page;
    } else {
        counter.zero();
        return page;
    }
}

function moveSliderPageByNumberFromCounterPages() {
    let numberPage = getNumberFromCounterPages();

    switch (numberPage) {
        case 1:
            sliderSwitcherPage(100);
            stylingNavMenuActive(headerAboutUsM, 'nav-footer__Mobile');
            stylingNavMenuActive(headerAboutUs, 'nav');
            break;
        case 2:
            sliderSwitcherPage(200);
            stylingNavMenuActive(headerVacanciesM, 'nav-footer__Mobile');
            stylingNavMenuActive(headerVacancies, 'nav');
            break;
        case 3:
            sliderSwitcherPage(300);
            stylingNavMenuActive(headerContactsM, 'nav-footer__Mobile');
            stylingNavMenuActive(headerContacts, 'nav');
            break;
        default:
            sliderSwitcherPage(0);
            stylingNavMenuActive(headerHomeM, 'nav-footer__Mobile');
            stylingNavMenuActive(headerHome, 'nav');
    }
}






