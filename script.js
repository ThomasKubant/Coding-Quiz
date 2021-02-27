var startBtn = document.querySelector("#startButton");
var splashEl = document.querySelector("#splash");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var answerEl = document.querySelector("#answer");
var timer = 75;
var questions = [
    {
        question: "What character do you use to select/target a html element's ID?",
        answers: {
            a: "#",
            b: "!",
            c: ".",
            d: "@"
        },
        correctAnswer: "a"
    },
    {
        question: "What programming language do you use to style html element's?",
        answers: {
            a: "HTML",
            b: "JavaScript",
            c: "CSS",
            d: "Python"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the syntax for declaring a variable in JavaScript?",
        answers: {
            a: "variable variableName = x;",
            b: "var variableName = x;",
            c: "variableName = x;",
            d: "int variableName = x;",
        },
        correctAnswer: "b"
    },
    {
        question: "How do you print to the console to help debug in JavaScipt?",
        answers: {
            a: "debug.console()",
            b: "console.debug()",
            c: "console.log()",
            d: "debug.log()",
        },
        correctAnswer: "c"
    }
]

var start = function() {
    splashEl.remove();
    startTimer();
    startQuiz();
}
var startTimer = function() {
    timerEl.textContent = "Time Remaining: " + timer;
    setInterval(function() {
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
    var currentQuestion = 0;
    questionEl.textContent = questions[currentQuestion].question;
    
}
startBtn.addEventListener("click", start);
