function appearAboutUsOnHome() {
    let aboutUs = document.querySelector('.aboutUs');
    return aboutUs.classList.toggle('aboutUs__showHome');
//    сдвигать только H1 с описанием во второй странице****
}

appearAboutUsOnHome();
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
let headerHome = document.querySelector('.header__home'),
    headerAboutUs = document.querySelector('.header__aboutUs'),
    headerVacancies = document.querySelector('.header__vacancies'),
    headerContacts = document.querySelector('.header__contacts');

headerHome.addEventListener("click", () => sliderSwitcherPage(0));
headerAboutUs.addEventListener("click", () => sliderSwitcherPage(100));
headerVacancies.addEventListener("click", () => sliderSwitcherPage(200));
headerContacts.addEventListener("click", () => sliderSwitcherPage(300));

