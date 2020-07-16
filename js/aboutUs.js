const changeText = () => {
    aboutUsBtn.onclick = (event) => {
        if (aboutUsBtn.innerText === "Наш офис") {
            event.target.innerText = "Наши проекты";
            hiddenOurProjectsH1.innerText = 'наш офис';
            hiddenOurProjectsP.innerText = 'м. университет, пр. партизанский, д.3, офис 333';
        } else if (aboutUsBtn.innerText === "Наши проекты") {
            event.target.innerText = "Наш офис";
            hiddenOurProjectsH1.innerText = 'Наши проекты';
            hiddenOurProjectsP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tempus pellentesque tellus dictum egestas non nec, dictum. Amet semper proin placerat in egestas odio praesent amet risus. Pellentesque augue lorem mi';
        }
    }
}
changeText();