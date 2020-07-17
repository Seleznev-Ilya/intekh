// const changeFirstBlock = () => {
//     aboutUsBtn.onclick = (event) => {
//         if (aboutUsBtn.innerText === "Наш офис") {
//             event.target.innerText = "Наши проекты";
//             hiddenOurProjectsH1.innerText = 'наш офис';
//             hiddenOurProjectsP.innerText = 'м. университет, пр. партизанский, д.3, офис 333';
//         } else if (aboutUsBtn.innerText === "Наши проекты") {
//             event.target.innerText = "Наш офис";
//             hiddenOurProjectsH1.innerText = 'Наши проекты';
//             hiddenOurProjectsP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tempus pellentesque tellus dictum egestas non nec, dictum. Amet semper proin placerat in egestas odio praesent amet risus. Pellentesque augue lorem mi';
//         }
//
//         // aboutUsBtn.classList.add('hidden');
//         // if(event.target.classList.contains("hidden")) {
//         // aboutUsBtn.classList.add('active');
//         // aboutUsBtn.classList.remove('hidden');
//         //     hiddenSliderAboutUs.style.display = 'none';
//         //     showTwoBlocks.style.display = 'block';
//         //     toTopOurOffices.style.marginTop = "10px";
//         //     showTwoBlocks.style.left = '0';
//         // } else if (event.target.classList.contains("active")) {
//         //     a.classList.add('hidden');
//         //     aboutUsBtn.classList.remove('active');
//         //     showTwoBlocks.style.display = 'none';
//         //     toTopOurOffices.style.marginTop = "200px";
//         //     console.log('good')
//         // }
//     }
// };
//
// changeFirstBlock();
//
// const changeSecondBlock = () => {
//
//
//     aboutUsBtn.onclick = (event) => {
//         // aboutUsBtn.classList.add('hidden');
//         if (event.target.classList.contains("hidden")) {
//             aboutUsBtn.classList.add('active');
//             aboutUsBtn.classList.remove('hidden');
//             hiddenSliderAboutUs.style.display = 'none';
//             showTwoBlocks.style.display = 'block';
//             toTopOurOffices.style.marginTop = "10px";
//             showTwoBlocks.style.left = '0';
//             console.log('ПИЗДА');
//
//         } else if (event.target.classList.contains("active")) {
//             console.log('ХУЙ я второй IF');
//             aboutUsBtn.classList.add('hidden');
//             aboutUsBtn.classList.remove('active');
//             showTwoBlocks.style.display = 'none';
//             toTopOurOffices.style.marginTop = "200px";
//         }
//     }
// };
// setTimeout(changeSecondBlock, 2000);
function changeFirstBlock() {
        if (aboutUsBtn.innerText === "Наш офис") {
            aboutUsBtn.innerText = "Наши проекты";
            hiddenOurProjectsH1.innerText = 'наш офис';
            hiddenOurProjectsP.innerText = 'м. университет, пр. партизанский, д.3, офис 333';
        } else if (aboutUsBtn.innerText === "Наши проекты") {
            aboutUsBtn.innerText = "Наш офис";
            hiddenOurProjectsH1.innerText = 'Наши проекты';
            hiddenOurProjectsP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tempus pellentesque tellus dictum egestas non nec, dictum. Amet semper proin placerat in egestas odio praesent amet risus. Pellentesque augue lorem mi';
        }
}

function hideSliderAboutUs() {
    hiddenSliderAboutUs.classList.toggle('hide');
    showTwoBlocks.classList.toggle('main__show-hide');
}

aboutUsBtn.addEventListener('click', () => {
    hideSliderAboutUs();
    changeFirstBlock();
});
