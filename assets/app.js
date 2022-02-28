// each page HTML
var beginning = document.querySelector(".first-page");
var questionsPage = document.querySelector('.questions-page');
var ending = document.querySelector('.last-page');
var highScorePage = document.querySelector('.high-scores');

// buttons
var beginButton = document.getElementById('start');
var buttonAnswerA = document.getElementById('a-btn');
var buttonAnswerB = document.getElementById('b-btn');
var buttonAnswerC = document.getElementById('c-btn');
var buttonAnswerD = document.getElementById('d-btn');
var submitScore = document.getElementById('submit');
var returnButton = document.getElementById('return');
var clearButton = document.getElementById('clear');
var viewButton = document.getElementById('scores');

// 
var quizQuestion = document.getElementById('quizQuestion')
var answerResponse = document.getElementById('inCorrect');
var finalScore = document.getElementById('final-score');
var pastScores = document.getElementById('pastScores');


// questions
var questions = [{
    question: "Which of these tags will emphasize text?",
    answerA: "A. em",
    answerB: "B. emphasize",
    answerC: "C. strong",
    answerD: "D. italicize",
    correctAnswer: 'a-btn',
}, 
{
    question: "What does the '*' symbol do in CSS?",
    answerA: "A. selects all bullet points",
    answerB: "B. selects everything in the body",
    answerC: "C. selects everything on the page",
    answerD: "D. it doesn't do anything",
    correctAnswer: 'b-btn',
},
{
    question: "Arrays in JavaScript can be used to _________",
    answerA: "A. numbers and strings",
    answerB: "B. other arrays",
    answerC: "C. booleans",
    answerD: "D. all of the above",
    correctAnswer: 'd-btn',
},
{
    question: "Commonly used data types do NOT include:",
    answerA: "A. booleans",
    answerB: "B. strings",
    answerC: "C. alerts",
    answerD: "D. numbers",
    correctAnswer: buttonAnswerC,
},
{
    question: "What does CSS Stand for?",
    answerA: "A. Critical Style Sheets",
    answerB: "B. Cascading Style Sheets",
    answerC: "C. Critical System Style",
    answerD: "D. Cascading System Style",
    correctAnswer: buttonAnswerB,
},
{
    question: "What does var stand for in JavaScript?",
    answerA: "A. variance",
    answerB: "B. variation",
    answerC: "C. variable",
    answerD: "D. varietal",
    correctAnswer: 'c-btn',
},
{
    question: "How can you search a webpage in Javascript?",
    answerA: "A. document.querySelector",
    answerB: "B. query.documentSelector",
    answerC: "C. select.documentQuery",
    answerD: "D. find.documentSelection",
    correctAnswer: 'b-btn',
},
{
    question: "A very useful tool used for developing and debugging for printing content to the debugger is:",
    answerA: "A. Javascript",
    answerB: "B. terminal/bash",
    answerC: "C. for loops",
    answerD: "D. console.log",
    correctAnswer: 'd-btn',
},
{
    question: "String values must be enclosed within _________ when being assigned to variables",
    answerA: "A. commas",
    answerB: "B. curly brackets",
    answerC: "C. quotes",
    answerD: "D. parenthesis",
    correctAnswer: 'c-btn',
},
{
    question: "The condition in an if/else statement is enclosed within ________",
    answerA: "A. parenthesis",
    answerB: "B. quotes",
    answerC: "C. curly brackets",
    answerD: "D. commas",
    correctAnswer: 'a-btn',
}];

// score
var score = 0;
var questionIndex = 0;
var qq = questions[questionIndex];


function reset() {
    score = 0;
    questionIndex = 0;
    savedScores = [];
    // clear local storage
    localStorage.clear();
};

// page starts with just coding quiz challenge 'first-page', hiding all others
// can choose to go straight to the high scores on nav bar
function beginQuiz() {
    beginning.style.display = "block";
    questionsPage.style.display = "none";
    ending.style.display = "none";
    highScorePage.style.display = "none";
    beginButton.addEventListener('click', startQuestions);
};

var timeLeft = 90;

// begins the test, showing only 'questions' class, hiding all others
function startQuestions() {
    beginning.style.display = "none";
    questionsPage.style.display = "block";
    ending.style.display = "none";
    highScorePage.style.display = "none";
    
    
    // start over with 0 score and timer
    var score = 0;
    var questionIndex = 0;
    timeLeft = 90;
    var countdownBegin = setInterval(function() {
        if(timeLeft <=0) {
            clearInterval(countdownBegin);
            testEnds();
        } else {
            document.getElementById('timer').innerHTML = "Timer: " + timeLeft;
        }
        timeLeft -= 1;
    }, 1000);
    // start questions, starts at 0 index
    showQuestions(questionIndex);
};
function showQuestions(questionIndex) {
    //  puts questions and answers on h1 and buttons
    if (questionIndex >= questions.length) {
        testEnds();
        return
    }
    quizQuestion.innerHTML = questions[questionIndex].question;
    buttonAnswerA.innerHTML = questions[questionIndex].answerA;
    buttonAnswerB.innerHTML = questions[questionIndex].answerB;
    buttonAnswerC.innerHTML = questions[questionIndex].answerC;
    buttonAnswerD.innerHTML = questions[questionIndex].answerD;


};

buttonAnswerA.addEventListener('click', function(event) {checkAnswer(event)});
buttonAnswerB.addEventListener('click', function(event) {checkAnswer(event)});
buttonAnswerC.addEventListener('click', function(event) {checkAnswer(event)});
buttonAnswerD.addEventListener('click', function(event) {checkAnswer(event)});
submitScore.addEventListener('click', saveHighScore);
returnButton.addEventListener('click', beginQuiz);
clearButton.addEventListener('click', reset);
        // if button is clicked, check the answer




// check the answers
function checkAnswer(event) {

    // correct is the correct answer part of the current question
console.log(event.currentTarget.id);
    var correct = questions[questionIndex].correctAnswer;
    var answer = event.currentTarget.id;
    console.log(correct);
    

        if (answer === correct) {
        alert("That's Correct!") // If correct, say correct, add points and console log score
        score++;
        console.log(score)
        questionIndex++;
        showQuestions(questionIndex);

        } else if (answer !== correct) {
        alert("That's Incorrect!") // If wrong, say wrong & deduct 10 seconds
            timeLeft -= 10;
            if (timeLeft < 0) {
                timeLeft = 0;
            };
            questionIndex++;
            showQuestions(questionIndex);
        };

    };    
     // If it has gone through all questions, show final score







var savedScores = [];

// test ends, showing only 'last-page' class, hiding all others
function testEnds() {
    beginning.style.display = "none";
    questionsPage.style.display = "none";
    ending.style.display = "block";
    highScorePage.style.display = "none";
    
    finalScore.textContent = score + " out of 10";
    

};


function saveHighScore() {

    
    var initials = document.getElementById('initials').value;
    savedScores.push({name: initials, score: score});
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
    HighScores();


};


// after submitting initials, shows only 'high-scores' page, hiding all others
function HighScores() {
    beginning.style.display = "none";
    questionsPage.style.display = "none";
    ending.style.display = "none";
    highScorePage.style.display = "block";

    var history = localStorage.getItem("savedScores");
    if (!history) {
        return false;
    }
    console.log("Past Scores Found!");
    var scoreHistory = JSON.parse(history);

    var historyLog = "";

    for (var i = 0; i < scoreHistory.length; i++) {
        historyLog += "<p>Name: " + scoreHistory[i].name + "   Score:" + scoreHistory[i].score + "</p>";
    };
    
    pastScores.innerHTML = historyLog;


};




// start on first page
beginQuiz();

// if view high scores is clicked, go to that page
viewButton.addEventListener('click', HighScores);