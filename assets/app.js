// each page HTML
var beginning = document.querySelector(".first-page");
var questionsPage = document.querySelector('.questions-page');
var ending = document.querySelector('.last-page');
var highScorePage = document.querySelector('.high-scores');

// buttons
var beginButton = document.getElementById('start-button');
var buttonAnswerA = document.getElementById('a');
var buttonAnswerB = document.getElementById('b');
var buttonAnswerC = document.getElementById('c');
var buttonAnswerD = document.getElementById('d');
var submitScore = document.getElementById('submit');
var returnButton = document.getElementById('return');
var clearButton = document.getElementById('clear');
var viewButton = document.getElementById('scores');

// 

// score
const score = "";


// timer



function reset() {
    
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


// begins the test, showing only 'questions' class, hiding all others
function startQuestions() {
    beginning.style.display = "none";
    questionsPage.style.display = "block";
    ending.style.display = "none";
    highScorePage.style.display = "none";
    
    
    // start over with 0 score and timer
    const score = 0;
    var timeLeft = 90;
    var countdownBegin = setInterval(function() {
        if(timeLeft <=0) {
            clearInterval(countdownBegin);
            testEnds();
        } else {
            document.getElementById('timer').innerHTML = "Timer: " + timeLeft;
        }
        timeLeft -= 1;
    }, 1000);
    // start questions


    // answer 



    // once finished with all of questions, function testEnds
};


// test ends, showing only 'last-page' class, hiding all others
function testEnds() {
    beginning.style.display = "none";
    questionsPage.style.display = "none";
    ending.style.display = "block";
    highScorePage.style.display = "none";


    submitScore.addEventListener('click', HighScores);
};


// after submitting initials, shows only 'high-scores' page, hiding all others
function HighScores() {
    beginning.style.display = "none";
    questionsPage.style.display = "none";
    ending.style.display = "none";
    highScorePage.style.display = "block";

    returnButton.addEventListener('click', beginQuiz);
    clearButton.addEventListener('click', reset);
};


// questions
const questions = [{
    question: "Which of these tags will emphasize text?",
    answerA: "<em>",
    answerB: "<emphasize>",
    answerC: "<strong>",
    answerD: "<italicize>",
    correctAnswer: "a",
}, 
{
    question: "What does the '*' symbol do in CSS?",
    answerA: "selects all bullet points",
    answerB: "selects everything in the body",
    answerC: "selects everything on the page",
    answerD: "it doesn't do anything",
    correctAnswer: "c",
},
{
    question: "Arrays in JavaScript can be used to _________",
    answerA: "numbers and strings",
    answerB: "other arrays",
    answerC: "booleans",
    answerD: "all of the above",
    correctAnswer: "d",
},
{
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
},
{
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
},
{
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
},
{
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
},
{
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
},
{
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
},
{
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
},
];

// start on first page
beginQuiz();

viewButton.addEventListener('click', HighScores);