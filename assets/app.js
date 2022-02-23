// each page HTML
var beginning = document.querySelector(".first-page");
var questionsPage = document.querySelector('.questions-page');
var ending = document.querySelector('.last-page');
var highScorePage = document.querySelector('.high-scores');

// buttons
var beginButton = document.getElementById('start-button');



// page starts with just coding quiz challenge 'first-page', hiding all others
// can choose to go straight to the high scores on nav bar
function beginQuiz() {
    beginning.style.display = "block";
    questionsPage.style.display = "none";
    ending.style.display = "none";
    highScorePage.style.display = "none";
    beginButton.addEventListener('click', nextQuestion);
};


// begins the test, showing only 'questions' class, hiding all others
function nextQuestion() {
    beginning.style.display = "none";
    questionsPage.style.display = "block";
    ending.style.display = "none";
    highScorePage.style.display = "none";
    // start over with 0 score
    const score = 0;

    
};


// test ends, showing only 'last-page' class, hiding all others
function testEnds() {
    beginning.style.display = "none";
    questionsPage.style.display = "none";
    highScorePage.style.display = "none";
};


// after submitting initials, shows only 'high-scores' page, hiding all others
function HighScores() {
    beginning.style.display = "none";
    questionsPage.style.display = "none";
    ending.style.display = "none";
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
{
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAnswer: "",
},
];

beginQuiz();
