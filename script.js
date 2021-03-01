var startBtn = document.querySelector("#startButton");
var splashEl = document.querySelector("#splash");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var answerEl = document.querySelector("#answer");
var timer = 75;
var correctAnswer  = "";
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var currentQuestion = 0;
var questions = [
    {
        question: "1. What character do you use to select/target a html element's ID?",
        answers: [
            "#",
            "!",
            ".",
            "@"
    ],
        correctAnswer: "#"
    },
    {
        question: "2. What programming language do you use to style html element's?",
        answers: [
            "HTML",
            "JavaScript",
            "CSS",
            "Python"
        ],
        correctAnswer: "CSS"
    },
    {
        question: "3. What is the syntax for declaring a variable in JavaScript?",
        answers: [
            "variable variableName = x;",
            "var variableName = x;",
            "variableName = x;",
            "int variableName = x;",
        ],
        correctAnswer: "var variableName = x;"
    },
    {
        question: "4. How do you print to the console to help debug in JavaScipt?",
        answers: [
            "debug.console()",
            "console.debug()",
            "console.log()",
            "debug.log()",
        ],
        correctAnswer: "console.log()"
    },
    {
        question: "5. How do you create an array in JavaScript?",
        answers: [
            "var array = [x; y]",
            "array([x, y])",
            "array = [x, y]",
            "var array = [x, y]",
        ],
        correctAnswer: "var array = [x, y]"
    },
    {
        question: "6. What character do you use to target/select a HTML element's class?",
        answers: [
            "#",
            ".",
            "!",
            "@"
        ],
        correctAnswer: "."
    },
    {
        question: "7. What is the shorthand method of increasing a variable by one?",
        answers: [
            "increase(variable)",
            "one(variable)",
            "variable++",
            "variable = variable + 1",
        ],
        correctAnswer: "variable++"
    },
    {
        question: "8. What is the correct syntax for creating a for loop that loops 5 times?",
        answers: [
            "for(i=0;i<5;i++)",
            "for(i=0;i<=5;i++)",
            "for(i=5;i<=5;i++)",
            "for(i=0;i>5;i++)"
        ],
        correctAnswer: "for(i=0;i<=5;i++)"
    },
    {
        question: "9. How do you comment in JavaScript?",
        answers: [
            "!Comment",
            "//Comment",
            "<!--Comment--!>",
            "*Comment*",
        ],
        correctAnswer: "//Comment",
    },
    {
        question: "10. Which is NOT a correct way to declare a function in JavaScript?",
        answers: [
            "var functionName = function() {}",
            "function functionName() {}",
            "var functionName => function () {}",
            "functionName() = {}"
        ],
        correctAnswer: "functionName() = {}"
    }
]
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
    answerCheck();
    timer = 0;
    clearInterval(time);
    localStorage.setItem("playerScore", timer);    
    endQuiz();
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
var correctAnswerDisplay = function() {
    var result = document.querySelector("#result");
    result.innerText = "Correct";
    result.style.color = "#90ee90";
}
var wrongAnswer = function() {
    var result = document.querySelector("#result");
    result.innerText = "Wrong (-10 Seconds)";
    result.style.color = "red";
}
var answerCheck = function() {
    if (playerAnswer === questions[currentQuestion].correctAnswer) {
      correctAnswerDisplay();
      console.log(playerAnswer)
    } else {
      timer = timer - 10;
      wrongAnswer();
    }
}
function endQuiz() {
    alert(
      "You have finished the coding quiz challenge with " + timer + " seconds to spare!"
    );
    window.location.replace('./high-scores.html');
  }
var quiz = function() {
    if(currentQuestion < 9 && timer > 0){
      answerCheck();
      currentQuestion++;
      showQuestion();
      showAnswers();
      console.log(currentQuestion)
      console.log(questions[currentQuestion].correctAnswer)
    }
    else if(timer <= 0) {
        endTimer();
    }
    else {
        answerCheck();
        clearInterval(time);
        localStorage.setItem("playerScore", timer);    
        endQuiz();
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