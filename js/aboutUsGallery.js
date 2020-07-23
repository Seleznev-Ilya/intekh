// <div class = "aboutUsImgVideo__item">
//     <video autoplay = "" class = "video0" loop = "" muted = "muted">
//              <source src = "video/video.mp4" type = "video/mp4">
//     </video>
//   </div>
// aboutUsImgVideoLine
// aboutUsGalleryObj

function imageVideoCreate(context) {
    for (let variableI = 0; variableI <= aboutUsGalleryObj.length; variableI++) {
        // console.log( aboutUsGalleryObj[i].id);
        console.log( aboutUsGalleryObj[variableI].video);
        let itemVI = document.createElement('div');

        let elementItem;
        let sourceV;
        if (context) {
            elementItem = document.createElement('video');
            elementItem.classList.add(`video${variableI}`);
            /*autoplay = "" class = "video0" loop = "" muted = "muted"*/
            elementItem.setAttribute('controls', ' ');
            elementItem.setAttribute('loop', ' ');
            elementItem.setAttribute('muted', 'muted');
                sourceV = document.createElement('source');
                sourceV.setAttribute('src',`${aboutUsGalleryObj[variableI].video}`);
                sourceV.type = aboutUsGalleryObj[variableI].type;
                elementItem.append(sourceV);
            itemVI.append(elementItem);
        } else {
            elementItem = document.createElement('img');
            elementItem.setAttribute('src',`${ aboutUsGalleryObj[variableI].img}`);
            itemVI.append(elementItem);
        }

        itemVI.classList.add('aboutUsImgVideo__item');
        aboutUsImgVideoLine.append(itemVI);
    }
}

imageVideoCreate(false);
let numberAbout = 0;
sliderImgVideoL.addEventListener('click', ()=>{
    let number = numberAbout;
    number *= 60;
    console.log( 'number');
    aboutUsImgVideoLine.style.transform = `translateX(-${number}vw)`;
    numberAbout++;
});
sliderImgVideoR.addEventListener('click', ()=>{
    let number = numberAbout;
    number *= 60;
    console.log( 'number');
    aboutUsImgVideoLine.style.transform = `translateX(-${number}vw)`;
    numberAbout--;
});