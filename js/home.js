let documentWidth = document.documentElement.clientWidth, time;
window.onresize = function () {
    if (time)
        clearTimeout(time);
    time = setTimeout(function () {
        if (documentWidth !== document.documentElement.clientWidth) {
            // h1Text();
            // location.reload();
        }
    }, 123);
};

function h1Text() {

    let goal = document.querySelector('.home__h1');
    let goal2 = document.querySelector('.home__h2');

    goal.innerHTML = "|";
    let homeMainH1;
    let homeMainH2;
    if (window.innerWidth > 426) {
        homeMainH2 = `Мы — {диджитал-сердце} Россельхозбанка. </br> Мы занимаемся цифровой трансформацией банка с нуля.`;
    } else {
        homeMainH2 = `Мы — {диджитал-сердце} Россельхозбанка. </br> Мы занимаемся цифровой </br> трансформацией банка с нуля.`;
    }

    if (window.innerWidth > 426) {
        homeMainH1 = "Мы занимаемся*цифровой*трансформацией*банков";
    } else {
        homeMainH1 = "Мы*занимаемся*цифровой*трансформа*цией банков";
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

        for (let a in homeMainH1) {
            setTimeout(() => {
                let line;
                if (homeMainH1[+a] === ' ') {
                    line = goal.innerHTML.slice(0, (goal.innerHTML.length - 1)) + ` `;
                    // goal.innerHTML = line + "&Iota;";
                    goal.innerHTML = line + "|";
                } else if (homeMainH1[+a] === '*') {
                    line = goal.innerHTML.slice(0, (goal.innerHTML.length - 1)) + `</br>`;
                    // goal.innerHTML = line + "&Iota;";
                    goal.innerHTML = line + "|";
                } else {
                    line = goal.innerHTML.slice(0, (goal.innerHTML.length - 1)) + homeMainH1[+a];
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
        goal2.innerHTML = homeMainH2;
        setTimeout(()=> goal2.style.opacity = '1',3800);

    }
}

h1Text();