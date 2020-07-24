// <div class = "aboutUsImgVideo__item">
//     <video autoplay = "" class = "video0" loop = "" muted = "muted">
//              <source src = "video/video.mp4" type = "video/mp4">
//     </video>
//   </div>
// aboutUsImgVideoLine
// aboutUsGalleryObj
let width2 = screen.width;
console.log(width2);
containerImgVideo.style.left = "100vw";
btnVideo.addEventListener('click', () => {
    if (width2 > 480){
        containerImgVideo.style.left = "50vw";
        sliderImgVideoL.style.display = 'block';
        headerSearch.style.display = 'none';
        whiteButton.style.display = 'none';
    } else {
        containerImgVideo.style.left = "0vw";
    }

});
cross.addEventListener('click', () => {
    if (width2 > 480) {
        containerImgVideo.style.left = "100vw";
        sliderImgVideoL.style.display = 'none';
        headerSearch.style.display = 'block';
        whiteButton.style.display = 'block';
    } else {
        containerImgVideo.style.left = "0vw";
        sliderImgVideoL.style.display = 'block';
    }
});
sliderImgVideoL.addEventListener('click', changeVideo);
let numberOfVideo = 0;

function changeVideo() {

        aboutUsVideo.style.opacity = '.3';
        aboutUsVideo.style.transition = '.5s';
        setTimeout(()=>{
            aboutUsVideo.style.opacity = '1';
        },500);
        for (let key in aboutUsGalleryObj) {
            if (numberOfVideo === +key) {
                video.setAttribute('src', `${aboutUsGalleryObj[+key].video}`);
                console.log(aboutUsGalleryObj[+key].video);
            }
        }
        numberOfVideo++;
        if (numberOfVideo > aboutUsGalleryObj.length) {
            numberOfVideo = 0;
        }
}
changeVideo();

