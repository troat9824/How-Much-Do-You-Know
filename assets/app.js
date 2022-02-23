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
var quizQuestion = document.getElementById('quizQuestion')
var answerResponse = document.getElementById('inCorrect');



// questions
var questions = [{
    question: "Which of these tags will emphasize text?",
    answerA: "em",
    answerB: "emphasize",
    answerC: "strong",
    answerD: "italicize",
    correctAnswer: "a",
}, 
{
    question: "What does the '*' symbol do in CSS?",
    answerA: "selects all bullet points",
    answerB: "selects everything in the body",
    answerC: "selects everything on the page",
    answerD: "it doesn't do anything",
    correctAnswer: "b",
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

// score
var score = 0;
var questionIndex = 0;


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
    // start questions, starts at 0 index
    var qq = questions[questionIndex];

    //  puts questions and answers on h1 and buttons
    quizQuestion.innerHTML = qq.question;
    buttonAnswerA.innerHTML = qq.answerA;
    buttonAnswerB.innerHTML = qq.answerB;
    buttonAnswerC.innerHTML = qq.answerC;
    buttonAnswerD.innerHTML = qq.answerD;
    


    // go to next question
    var nextQuestion = function() {
        qq + 1;
    };

    // check the answers
    var checkAnswer = function(btn) {
        // correct is the correct answer part of the current question
        var correct = qq.correctAnswer;
        var answer = btn.id;
        var incorrect = "";

        // if the button pressed is equal to the current question's answer, add points and go on to next question
        if (answer === correct) {
            answerResponse.textContent = "That's correct!";
            score ++;
            console.log(score);
            nextQuestion();
            // if the button pressed is NOT equal to the current question's answer, subtract time and go on to next question
        } else if (answer === incorrect) {
            answerResponse.textContent = "That is incorrect!"; 
            console.log(score)
            nextQuestion();   
        };
        
           // once finished with all of questions, function testEnds
        if (questions.length === questionIndex+1) {
            testEnds();
        };
    };

    // if button is clicked, check the answer
    buttonAnswerA.addEventListener('click', checkAnswer(this));
    buttonAnswerB.addEventListener('click', checkAnswer(this));
    buttonAnswerC.addEventListener('click', checkAnswer(this));
    buttonAnswerD.addEventListener('click', checkAnswer(this));
    
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




// start on first page
beginQuiz();

// if view high scores is clicked, go to that page
viewButton.addEventListener('click', HighScores);