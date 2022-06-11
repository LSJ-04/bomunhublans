let target = document.querySelector("#dynamic");
let stingArr = ["문이과 테스트", "나는 문과인가 이과인가", 
"문과? 이과?"];
let selectString = stingArr[Math.floor(Math.random() * stingArr.length)];
let selectStringArr = selectString.split("");
function randomSting(){
    let stingArr = ["문이과 테스트", "나는 문과인가 이과인가", 
    "문과? 이과?"];
    let selectString = stingArr[Math.floor(Math.random() * stingArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}
//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomSting());
}
//한글자식 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomSting());
// //커서 깜빡임 효과
// function blink() {
//     target.classList.toggle("active");
// }

// setInterval(blink, 500);