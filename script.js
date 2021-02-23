var startBtn = document.querySelector("#startButton");
var splashEl = document.querySelector("#splash");
var start = function() {
    splashEl.remove();
}
startBtn.addEventListener("click", start);
