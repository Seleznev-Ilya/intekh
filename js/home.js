let documentWidth = document.documentElement.clientWidth, time;
window.onresize = function () {
    if (time)
        clearTimeout(time);
    time = setTimeout(function () {
        if (documentWidth !== document.documentElement.clientWidth) {
            h1Text();
            // location.reload();
        }
    }, 123);
};
function h1Text(){

    let goal = document.querySelector('.home__h1');
    let goal2 = document.querySelector('.home__h2');

    goal.innerHTML = "|";
    let homeMainText;
    if (window.innerWidth > 426) {
        homeMainText = "Мы занимаемся*цифровой*трансформацией*бан";
    } else {
        homeMainText = "Мы*занимаемся*цифровой*трансформа*цией бан";
    }
    let num = 0;

    function blink() {

        if (num === 0) {
            // goal.innerHTML =   goal.innerHTML.slice(0, goal.innerHTML.length -1) + "&Iota;";
            goal.innerHTML = goal.innerHTML.slice(0, goal.innerHTML.length - 1) + "|";

            num++;
        } else {
            goal.innerHTML = goal.innerHTML.slice(0, goal.innerHTML.length - 1) + "&zwj;";
            num--;
        }
    }

    let timerId = setInterval(blink, 550);
    setTimeout(() => {
        clearInterval(timerId)
    }, 2000);
    setTimeout(makeArmy, 2500);


    function makeArmy() {

        for (let a in homeMainText) {
            setTimeout(() => {
                let line;
                if (homeMainText[+a] === ' ') {
                    line = goal.innerHTML.slice(0, (goal.innerHTML.length - 1)) + ` `;
                    // goal.innerHTML = line + "&Iota;";
                    goal.innerHTML = line + "|";
                } else if (homeMainText[+a] === '*') {
                    line = goal.innerHTML.slice(0, (goal.innerHTML.length - 1)) + `</br>`;
                    // goal.innerHTML = line + "&Iota;";
                    goal.innerHTML = line + "|";
                } else {
                    line = goal.innerHTML.slice(0, (goal.innerHTML.length - 1)) + homeMainText[+a];
                    // goal.innerHTML = line + "&Iota;";
                    goal.innerHTML = line + "|";
                }
            }, a * 90);
        }
        setTimeout(() => {
            let timerId1 = setInterval(blink, 550);
            setTimeout(() => {
                clearInterval(timerId1)
            }, 3800);
        }, 2100);
        goal2.style.opacity = '1';
    }
}
h1Text();