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
    correctAnswer: buttonAnswerA,
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
    question: "",
    answerA: "A. ",
    answerB: "B. ",
    answerC: "C. ",
    answerD: "D. ",
    correctAnswer: "",
},
{
    question: "",
    answerA: "A. ",
    answerB: "B. ",
    answerC: "C. ",
    answerD: "D. ",
    correctAnswer: "",
},
{
    question: "",
    answerA: "A. ",
    answerB: "B. ",
    answerC: "C. ",
    answerD: "D. ",
    correctAnswer: "",
},
{
    question: "",
    answerA: "A. ",
    answerB: "B. ",
    answerC: "C. ",
    answerD: "D. ",
    correctAnswer: "",
},
{
    question: "",
    answerA: "A. ",
    answerB: "B. ",
    answerC: "C. ",
    answerD: "D. ",
    correctAnswer: "",
},
{
    question: "",
    answerA: "A. ",
    answerB: "B. ",
    answerC: "C. ",
    answerD: "D. ",
    correctAnswer: "",
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



        // if button is clicked, check the answer
buttonAnswerA.addEventListener('click', checkAnswer(this));
buttonAnswerB.addEventListener('click', checkAnswer(this));
buttonAnswerC.addEventListener('click', checkAnswer(this));
buttonAnswerD.addEventListener('click', checkAnswer(this));

// // go to next question
// var nextQuestion = function(btn) {
//     qq++;
// };

// check the answers
function checkAnswer(btn) {
    // correct is the correct answer part of the current question
console.log(btn);
    var correct = qq.correctAnswer;
    var answer = btn.id;
    // var incorrect = "";
    
    for (i = 0; i < qq.length; i++) {

        // once finished with all of questions, function testEnds
        if (questions.length === questionIndex+1) {
            testEnds();        
            };
        
            // if the button pressed is equal to the current question's answer, add points and go on to next question
            if (answer === correct) {
                answerResponse.textContent = "That's correct!";
                score ++;
                console.log(score);
                showQuestions();
                // if the button pressed is NOT equal to the current question's answer, subtract time and go on to next question
            } else if (answer != correct) {
                answerResponse.textContent = "That is incorrect!"; 
                console.log(score)
                showQuestions();   
            };
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

    // pastScores.textContent = 

    returnButton.addEventListener('click', beginQuiz);
    clearButton.addEventListener('click', reset);
};




// start on first page
beginQuiz();

// if view high scores is clicked, go to that page
viewButton.addEventListener('click', HighScores);