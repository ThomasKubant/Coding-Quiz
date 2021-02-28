var startBtn = document.querySelector("#startButton");
var splashEl = document.querySelector("#splash");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var answerEl = document.querySelector("#answer");
var timer = 75;
var playerScore = 0;
var correctAnswer  = "";
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var currentQuestion = 0;
var questions = [
    {
        question: "What character do you use to select/target a html element's ID?",
        answers: [
            "#",
            "!",
            ".",
            "@"
    ],
        correctAnswer: "#"
    },
    {
        question: "What programming language do you use to style html element's?",
        answers: [
            "HTML",
            "JavaScript",
            "CSS",
            "Python"
        ],
        correctAnswer: "c"
    },
    {
        question: "What is the syntax for declaring a variable in JavaScript?",
        answers: [
            "variable variableName = x;",
            "var variableName = x;",
            "variableName = x;",
            "int variableName = x;",
        ],
        correctAnswer: "b"
    },
    {
        question: "How do you print to the console to help debug in JavaScipt?",
        answers: [
            "debug.console()",
            "console.debug()",
            "console.log()",
            "debug.log()",
        ],
        correctAnswer: "c"
    }
]
// test github on laptop
var start = function() {
    splashEl.remove();
    startTimer();
    startQuiz();
}
var startTimer = function() {
    timerEl.textContent = "Time Remaining: " + timer;
    time = setInterval(function() {
        if(timer > 0) {
            timer--;
        }
        timerEl.textContent = "Time Remaining: " + timer;
        if(timer === 0) {
            endTimer();
        }

    }, 1000);
}
var endTimer = function() {

}
var startQuiz = function() {
    showQuestion();
    showAnswers();
}

var showQuestion = function() {
    questionEl.textContent = questions[currentQuestion].question;
}
var showAnswers = function() {
    answerA.innerText = questions[currentQuestion].answers[0];
    answerB.innerText = questions[currentQuestion].answers[1];
    answerC.innerText = questions[currentQuestion].answers[2];
    answerD.innerText = questions[currentQuestion].answers[3];
    document.getElementById("answers").style.display = "flex";
}
var answerCheck = function() {

}
var quiz = function() {
    if(questions.length > 1){
      answerCheck();
      questions.splice(currentQuestion, 1);
      showQuestion();
      showAnswers();
    }
    else{
      answerCheck();
      clearInterval(time);
      playerScore = timerDisplay.innerText;
      localStorage.setItem("playerScore", playerScore);    
      endGame();
    }
}

startBtn.addEventListener("click", start);
answerA.addEventListener("click", function () {
  playerAnswer = answerA.innerText;
  quiz();
});

answerB.addEventListener("click", function () {
  playerAnswer = answerB.innerText;
  quiz();
});

answerC.addEventListener("click", function () {
  playerAnswer = answerC.innerText;
  quiz();
});

answerD.addEventListener("click", function () {
  playerAnswer = answerD.innerText;
  quiz();
})