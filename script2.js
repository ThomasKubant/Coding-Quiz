var highScoreList = [];
var newScore = {};
var playerScore = localStorage.getItem("playerScore");
var scoreListEl = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");
var lastKnownScore = localStorage.getItem("playerScore");
var getScores = function() {
    highScoreList = localStorage.getItem("highScoreList");
     if (!highScoreList){
        highScoreList = [];
     }
     else{
         highScoreList = JSON.parse(highScoreList);
     }
}
var showScores = function() {
    highScoreList.sort(function(a, b) {return (b.score - a.score)})
    for(i = 0; i < highScoreList.length; i++){
        var scoreEl = document.createElement("li")
        scoreEl.className = ("score");
        scoreEl.innerHTML = highScoreList[i].name + " - " + highScoreList[i].score;
        scoreListEl.appendChild(scoreEl);
    }
    if(highScoreList.length === 0) {
        scoreListEl.style.display = "none";
    }
}
var namePrompt = function() {
    var playerName = prompt("Enter your name.");
    newScore = {name: playerName, score: playerScore};
    console.log(highScoreList);
    highScoreList.push(newScore);
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
}
var clearScores = function() {
    highScoreList = [];
    localStorage.clear();
    showScores();
}
clearBtn.addEventListener("click", clearScores);
getScores();
if(highScoreList === undefined || highScoreList.length == 0) {
    namePrompt();
}
if(lastKnownScore != highScoreList[highScoreList.length - 1].score) {
    namePrompt();
}
showScores();
console.log(lastKnownScore);
console.log(highScoreList[highScoreList.length - 1]);