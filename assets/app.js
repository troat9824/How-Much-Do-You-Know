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
var initials = document.getElementById('initials').value;

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
    correctAnswer: buttonAnswerB,
},
{
    question: "Arrays in JavaScript can be used to _________",
    answerA: "A. numbers and strings",
    answerB: "B. other arrays",
    answerC: "C. booleans",
    answerD: "D. all of the above",
    correctAnswer: buttonAnswerD,
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
    correctAnswer: buttonAnswerC,
},
{
    question: "How can you search a webpage in Javascript?",
    answerA: "A. document.querySelector",
    answerB: "B. query.documentSelector",
    answerC: "C. select.documentQuery",
    answerD: "D. find.documentSelection",
    correctAnswer: buttonAnswerB,
},
{
    question: "A very useful tool used for developing and debugging for printing content to the debugger is:",
    answerA: "A. Javascript",
    answerB: "B. terminal/bash",
    answerC: "C. for loops",
    answerD: "D. console.log",
    correctAnswer: buttonAnswerD,
},
{
    question: "String values must be enclosed within _________ when being assigned to variables",
    answerA: "A. commas",
    answerB: "B. curly brackets",
    answerC: "C. quotes",
    answerD: "D. parenthesis",
    correctAnswer: buttonAnswerC,
},
{
    question: "The condition in an if/else statement is enclosed within ________",
    answerA: "A. parenthesis",
    answerB: "B. quotes",
    answerC: "C. curly brackets",
    answerD: "D. commas",
    correctAnswer: buttonAnswerA,
}];

// score
var score = 0;
var questionIndex = 0;
var qq = questions[questionIndex];


function reset() {
    score = 0;
    questionIndex = 0;
    
    // clear local storage
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
    var score = 0;
    var questionIndex = 0;
    var timeLeft = 10;
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
    showQuestions();
};
function showQuestions() {
    //  puts questions and answers on h1 and buttons
    quizQuestion.innerHTML = qq.question;
    buttonAnswerA.innerHTML = qq.answerA;
    buttonAnswerB.innerHTML = qq.answerB;
    buttonAnswerC.innerHTML = qq.answerC;
    buttonAnswerD.innerHTML = qq.answerD;


};

buttonAnswerA.addEventListener('click', function(event) {checkAnswer(event)});
buttonAnswerB.addEventListener('click', function(event) {checkAnswer(event)});
buttonAnswerC.addEventListener('click', function(event) {checkAnswer(event)});
buttonAnswerD.addEventListener('click', function(event) {checkAnswer(event)});

        // if button is clicked, check the answer




// check the answers
function checkAnswer(event) {

    // correct is the correct answer part of the current question
console.log(event.currentTarget.id);
    var correct = questions[questionIndex].correctAnswer;
    var answer = event.currentTarget.id;
    
    for (i = 0; i < qq.length; i++) {

        if (answer === correct) {
        answerResponse.textContent = "That's Correct!"; // If correct, say correct, add points and console log score
        score++;
        console.log(score)
        showQuestions();
        } else if (answer != correct) {
        answerResponse.textContent = "That's Incorrect!"; // If wrong, say wrong & deduct 10 seconds
            secondsLeft -= 10
            if (secondsLeft < 0) {
                secondsLeft = 0;
            };
            showQuestions();
        };

    };    
    if (qq.length === questionIndex+1) {
        testEnds(); // If it has gone through all questions, show final score
    };


};






// test ends, showing only 'last-page' class, hiding all others
function testEnds() {
    beginning.style.display = "none";
    questionsPage.style.display = "none";
    ending.style.display = "block";
    highScorePage.style.display = "none";

    finalScore.textContent = score + " out of 10";
    
    // save user input initials to local storage
    
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




// start on first page
beginQuiz();

// if view high scores is clicked, go to that page
viewButton.addEventListener('click', HighScores);