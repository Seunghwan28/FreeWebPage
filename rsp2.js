const sliderWrap = document.querySelector(".slider-wrap");
const sliderImg = document.querySelector(".slider-img");
const slider = document.querySelectorAll(".slider");

let currentIndex = 0;
let sliderCount = slider.length;

slider[0].style.opacity = "0";
slider[1].style.opacity = "0";
slider[2].style.opacity = "0";


let timer = setInterval(() => {
    let nextIndex = (currentIndex + 1) % sliderCount;  

    slider[currentIndex].style.opacity = "0";
    slider[nextIndex].style.opacity = "1";

    slider.forEach(slider => {
        slider.style.transition = "all 0.3s";
    });

    currentIndex = nextIndex;
}, 500);

var res = new Array('rock', 'paper', 'scissors');
var randres = res[Math.floor(Math.random()*3)];
console.log(randres);

let rock = document.getElementsByClassName('rock');
let paper = document.getElementsByClassName('paper');
let scics = document.getElementsByClassName('scissors');


function DecideResult1() {
    clearInterval(timer);
    if (randres === "rock") {
        slider[0].style.opacity = "0"; //보
        slider[1].style.opacity = "1";  //주먹
        slider[2].style.opacity = "0";  //가위
        alert("이겼습니다!");
    }
    else if(randres === "paper") {
        slider[0].style.opacity = "1"; //보
        slider[1].style.opacity = "0";  //주먹
        slider[2].style.opacity = "0";  //가위
        alert("비겼습니다~~");
    }
    else if(randres === "scissors"){
        slider[0].style.opacity = "0"; //주먹
        slider[1].style.opacity = "0";  //보
        slider[2].style.opacity = "1";  //가위
        alert("졌어요ㅜㅜ");
    }
}

function DecideResult2() {
    clearInterval(timer);
    if (randres === "rock") {
        slider[0].style.opacity = "0"; //보
        slider[1].style.opacity = "1";  //주먹
        slider[2].style.opacity = "0";  //가위
        alert("비겼습니다~~!");
    }
    else if(randres === "paper") {
        slider[0].style.opacity = "1"; //보
        slider[1].style.opacity = "0";  //주먹
        slider[2].style.opacity = "0";  //가위
        alert("졌어요ㅜㅜ");
    }
    else if(randres === "scissors"){
        slider[0].style.opacity = "0"; //주먹
        slider[1].style.opacity = "0";  //보
        slider[2].style.opacity = "1";  //가위
        alert("이겼습니다!");
    }
}

function DecideResult3() {
    clearInterval(timer);
    if (randres === "rock") {
        slider[0].style.opacity = "0"; //보
        slider[1].style.opacity = "1";  //주먹
        slider[2].style.opacity = "0";  //가위
        alert("졌어요ㅜㅜ");
    }
    else if(randres === "paper") {
        slider[0].style.opacity = "1"; //보
        slider[1].style.opacity = "0";  //주먹
        slider[2].style.opacity = "0";  //가위
        alert("이겼습니다!");
    }
    else if(randres === "scissors"){
        slider[0].style.opacity = "0"; //주먹
        slider[1].style.opacity = "0";  //보
        slider[2].style.opacity = "1";  //가위
        alert("비겼습니다~~!!");
    }
}
