function changeFirstBlock() {
    if (aboutUsBtn.innerText === "Наш офис") {
        aboutUsBtn.innerText = "Наши проекты";
        hiddenOurProjectsH1.innerText = 'наш офис';
        hiddenOurProjectsH2.innerText = 'Москва';
        hiddenOurProjectsP.innerText = 'м. университет, пр. партизанский, д.3, офис 333';
        if (width <= 768) {
            mainOurProjects.style.width = '50%';
            mainTvoContainers.style.flexDirection = 'row';
        }
    } else if (aboutUsBtn.innerText === "Наши проекты") {
        aboutUsBtn.innerText = "Наш офис";
        hiddenOurProjectsH1.innerText = 'Наши проекты';
        hiddenOurProjectsH2.innerText = '';
        hiddenOurProjectsP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tempus pellentesque tellus dictum egestas non nec, dictum. Amet semper proin placerat in egestas odio praesent amet risus. Pellentesque augue lorem mi';
        if (width <= 768) {
            mainOurProjects.style.width = 'auto';
            mainTvoContainers.style.flexDirection = 'column';
        }
    }
}

function hideSliderAboutUs() {
    hiddenSliderAboutUs.classList.toggle('hideOpacity');
    hiddenSliderAboutUs.classList.toggle('hide');
    // setTimeout(()=> hiddenSliderAboutUs.classList.toggle('hide'), 150);
    // showTwoBlocks.classList.toggle('main__show-hideOpacity');
    setTimeout(()=> showTwoBlocks.classList.toggle('main__show-hideOpacity'), 50);
    showTwoBlocks.classList.toggle('main__show-hide');
}

aboutUsBtn.addEventListener('click', () => {
    hideSliderAboutUs();
    changeFirstBlock();
});


/* Slider */

document.getElementById('slider-right').onclick = sliderRight;
document.getElementById('slider-left').onclick = sliderLeft;
let polosa = document.getElementById('line');
let left = 0;
let width = screen.width;

function sliderRight() {
    if (width > 1200) {
        left = left - 420;
        if (left < -2520) {
            left = 0;
        }
        polosa.style.left = left + 'px';
    } else if (width > 992 && width <= 1200) {
        left = left - 420;
        if (left < -2520) {
            left = 0;
        }
        polosa.style.left = left + 'px';
    } else if (width > 768 && width <= 992) {
        left = left - 300;
        if (left < -1800) {
            left = 0;
        }
        polosa.style.left = left + 'px';
    } else if (width > 480 && width <= 768) {
        left = left - 350;
        if (left < -2100) {
            left = 0;
        }
        polosa.style.left = left + 'px';
    } else if (width >= 320 && width <= 480) {
        left = left - 270;
        if (left < -1620) {
            left = 0;
        }
        polosa.style.left = left + 'px';
    } else console.log('no!');
}

function sliderLeft() {

    if (width > 1200) {
        left += 420;
        if (left > 0) {
            left = -1 * (420 * 6);
        }
        polosa.style.left = left + 'px';
    } else if (width > 992 && width <= 1200) {
        left += 420;
        if (left > 0) {
            left = -1 * (420 * 6);
        }
        polosa.style.left = left + 'px';
    } else if (width > 768 && width <= 992) {
        left += 300;
        if (left > 0) {
            left = -1 * (300 * 6);
        }
        polosa.style.left = left + 'px';
    }  else if (width > 480 && width <= 768) {
        left += 350;
        if (left > 0) {
            left = -1 * (350 * 6);
        }
        polosa.style.left = left + 'px';
    } else if (width >= 320 && width <= 480) {
        left += 270;
        if (left > 0) {
            left = -1 * (270 * 6);
        }
        polosa.style.left = left + 'px';
    } else console.log('no!');
}