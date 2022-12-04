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