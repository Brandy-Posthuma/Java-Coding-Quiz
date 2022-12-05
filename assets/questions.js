// setting up an array and sending the questions, number, options, and answers
var questions = [
    //Question #1
    {
        id: 1,
        question: "What is JavaScript?",
        a: "A scripting language used to make the website interactive",
        b: "A cup of Joe",
        c: "An assembly language used to make the website interactive",
        d: "Not any of these answers",
        answer: "a"   
    },
    //Question #2
    {
        id: 2,
        question: "JavaScript is an _____language?",
        a: "Object-Oriented",
        b: "Procedural",
        c: "Object-Based",
        d: "All of the Above",
        answer: "a"
    },
    //Question #3
    {
        id: 3,
        question: "Which of the following is not a JavaScript data type?",
        a: "Undefined",
        b: "Number",
        c: "Null",
        d: "All of the Above",
        answer: "d"
    },
    //Question #4
    {
        id: 4,
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        a: "Function/Method",
        b: "RMI",
        c: "Preprocessor",
        d: "Triggering Event",
        answer: "a"
    },
    //Question #5
    {
        id: 5,
        question: "Which symbol is used to separate JavaScript statements?",
        a: "Colon (:)",
        b: "Underscore (_)",
        c: "Semicolon (;)",
        d: "Comma (,)",
        answer: "c"
    } 
];


const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answers"));
const questionCounterText = document.getElementById('counter');
const scoreText = document.getElementById("score");

console.log(questions);
let questionCounter;
let score;
const MAX_Questions = 5;

let acceptingAnswers;

startGame = () => {
    questionCounter = 0;
    score = 0;
    acceptingAnswers = true;
    availableQuestions = getRandomQuestions(questions, MAX_QUESTIONS);
        consolelog(availableQuestions);
        getNewQuestion();
};

const getRandomQuestions = (arr, n) => {
    let len = arr.length;
    if (n > len){
        throw new RangeError(
            "getRandomQuestions: more elements taken than are available"
        );
    }

    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return(selected = shuffled.slice(0, n));
};

const getNewQuestion = () => {
    if (availableQuestions.length === 0) {
        alert("End of the game");
        alert("You scored " + score + " points!")
        return;
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    currentQuestion = availableQuestions[0];
    console.log("current question --> ", currentQuestion.question);
    question.innerText = currentQuestion.question;
    
    answers.forEach((answer) => {
        if(!acceptingAnswers){
            //console.log("not accepting");
            return;
        }
        acceptingAnswers = false;
        const clickedAnswer = e.target;
        const answeredLetter = clickedAnswer.dataset["answer"]

        let classToApply = "incorrect";

        if (answeredLetter === currentQuestion.answer) {
            score++;
            scoreText.innerText = score;
            classToApply = "incorrect";
            console.log("incorrect")
        }

        clickedAnswer.parentElement.classList.add(classToApply);

        setTimeout(() => {
            clickedAnswer.parent.Element.classList.add(classToApply);
            getNewQuestion();
            acceptingAnswers = true;
        }, 1000);
    });
    availableQuestions.shift();
};



startGame();

var highScore = [];