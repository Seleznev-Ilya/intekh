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

//painting by active class in nav menu
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

function sliderSwitcherPageByArrow(n) {
    function makeCounter() {

        function counter() {
            return counter.count++;
        }

        counter.count = n;

        return counter;
    }

    let counter = makeCounter();

    // counter.count = n;
    return counter();
}

console.log(sliderSwitcherPageByArrow(2));
console.log(sliderSwitcherPageByArrow(2));
console.log(sliderSwitcherPageByArrow(2));

