num = 0;
let number = document.querySelector("#num");

var decrease = document.querySelector("#decrease");
var increment = document.querySelector("#increment");

decrease.addEventListener("click", function decrease() {
    document.querySelector("#increment").disabled = false;
    num = num - 1;
    number.innerHTML = num;
    disabledButton(num);
    negativeNum(num);
})

increment.addEventListener("click", function increment() {
    document.querySelector("#decrease").disabled = false;
    num = num + 1;
    number.innerHTML = num;
    disabledButton(num);
    negativeNum(num);
})

function disabledButton (num){
    if (num >= 10){
        document.querySelector("#increment").disabled = true;
    }
    if (num <= -10) {
        document.querySelector("#decrease").disabled = true;
    }
}

function negativeNum (num){
    if (num < 0) {
        document.querySelector("#num").style.color = "red";
    } else if (num > 0) {
        document.querySelector("#num").style.color = "rgb(29, 116, 29)"
    } else {
        document.querySelector("#num").style.color = "black";   
    }
}

// function decrease() {
//     newNum = num - 1;
//     num = newNum;
//     number.innerHTML = newNum;
// }

// function add() {
//     newNum = num + 1;
//     num = newNum;
//     number.innerHTML = newNum;
// }