function appearAboutUsOnHome() {
    let aboutUs = document.querySelector('.aboutUs');
    return aboutUs.classList.toggle('aboutUs__showHome');
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




