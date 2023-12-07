let target = document.querySelector("#dynamic");

//string 랜덤으로 하나 선택하기
function randomString() {
  let stringArr = ["환영합니다!", "Welcome!", "ようこそ!", "Willkommen!", "أهلا بك!", "добро пожаловать!"];
  let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

//리셋하고 다시 하기
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

//한 글자씩 나오게 하는 느낌
function dynamic(randomArr) {
  if(randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    }, 80);
  }else{
    setTimeout(resetTyping, 2500);
  }
}

resetTyping();

//뒤에 커서같은거 깜빡이게 하기
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);

