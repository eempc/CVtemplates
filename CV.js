const techBulletsProgressBars = document.querySelectorAll(".tech-progress-bar-content");
let numberT = techBulletsProgressBars.length;

for (let i = 0; i < numberT; i++) {
    let percentage = (numberT - i) / numberT * 100;
    techBulletsProgressBars[i].style.width = percentage.toString() + "%";
}

const softwareBulletsProgressBars = document.querySelectorAll(".software-progress-bar-content");
let numberS = softwareBulletsProgressBars.length;

for (let i = 0; i < numberS; i++) {
    let percentage = (numberS - i) / numberS * 100;
    softwareBulletsProgressBars[i].style.width = percentage.toString() + "%";
}