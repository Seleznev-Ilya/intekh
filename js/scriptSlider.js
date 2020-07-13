function appearAboutUsOnHome() {
    let aboutUs = document.querySelector('.aboutUs');
    return aboutUs.classList.toggle('aboutUs__showHome');
//    сдвигать только H1 с описанием во второй странице****
}

// appearAboutUsOnHome();

/*Получать отступ на сейчас, по клику стрелочки увеличивая его по ширине экрана,
    так же добавить ивентЛисенер доя каждого нажатия, для мобил и веб версии одинаковые классы*/
function sliderSwitcherPage(i) {
    if (i < 100 && appearAboutUsOnHome() === false) {
        appearAboutUsOnHome();
    } else if (i === 100 && appearAboutUsOnHome() === true) {
        appearAboutUsOnHome();
    }
    let sliderSwitcher = document.querySelector('.document__inner');
    sliderSwitcher.style.transform = `translateX(-${i}vw)`;
}

//painting active item by active class in nav menu
function stylingNavMenuActive(c, parent) {
    let nav = document.querySelectorAll(`.${parent}`);
    let navMenu = nav[0].children[0].children;
    for (let key of navMenu) {
        for (let key1 of key.classList) {
            if (key1 === 'active') {
                key.classList.remove("active");
            }
        }
    }
    c.classList.add('active');
}
/*Arrow interaction with nov, nav-footer*/
function CounterPages() {
    let count = 0;
    this.next = function () {
        return ++count;
    };
    this.zero = function (n = -1) {
        return count = n;
    };
}

let counter = new CounterPages();

function getNumberFromCounterPages() {
    let page = counter.next();
    if (page < 3) {
        return page;
    } else {
        counter.zero();
        return page;
    }
}

/*TEST*/
function moveSliderPageByNumberFromCounterPages(){
    let numberPage = getNumberFromCounterPages();
    console.log(numberPage);
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






