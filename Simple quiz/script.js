const questions = [
    {
        question: "Who invented Java Programming?",
        answer: [
            { text: "Guido van Rossum", correct: "false" },
            { text: "James Gosling", correct: "true" },
            { text: "Dennis Ritchie", correct: "false" },
            { text: "Bjarne Stroustrup", correct: "false" },
        ]
    },
    {
        question: "Which component is used to compile, debug and execute the Java programs?",
        answer: [
            { text: "JRE", correct: "false" },
            { text: "JIT", correct: "false" },
            { text: "JDK", correct: "true" },
            { text: "JVM", correct: "false" },
        ]
    },
    {
        question: "Which one of the following is not a Java feature?",
        answer: [
            { text: "Object-oriented", correct: "false" },
            { text: "Use of pointers", correct: "true" },
            { text: "Portable", correct: "false" },
            { text: "Dynamic and Extensible", correct: "false" },
        ]
    },
    {
        question: "Which of these cannot be used for a variable name in Java?",
        answer: [
            { text: "identifier & keyword", correct: "false" },
            { text: "identifier", correct: "false" },
            { text: "keyword", correct: "true" },
            { text: "none of the mentioned", correct: "false" },
        ]
    },
    {
        question: "What is the extension of java code files?",
        answer: [
            { text: ".js", correct: "false" },
            { text: ".txt", correct: "false" },
            { text: "class", correct: "false" },
            { text: ".java", correct: "true" },
        ]
    },
    {
        question: "Which environment variable is used to set the java path?",
        answer: [
            { text: "MAVEN_Path", correct: "false" },
            { text: "JavaPATH", correct: "false" },
            { text: "JAVA", correct: "false" },
            { text: "JAVA_HOME", correct: "true" },
        ]
    },
    {
        question: "Which of the following is not an OOPS concept in Java?",
        answer: [
            { text: "Polymorphism", correct: "false" },
            { text: "Inheritance", correct: "false" },
            { text: "Compilation", correct: "true" },
            { text: "Encapsulation", correct: "false" },
        ]
    },
    {
        question: "Which of the following is a type of polymorphism in Java Programming?",
        answer: [
            { text: "Multiple polymorphism", correct: "false" },
            { text: "Compile time polymorphism", correct: "true" },
            { text: "Multilevel polymorphism", correct: "false" },
            { text: "Execution time polymorphism", correct: "false" },
        ]
    },
    {
        question: "Who invented Java Programming?",
        answer: [
            { text: "Guido van Rossum", correct: "false" },
            { text: "James Gosling", correct: "true" },
            { text: "Dennis Ritchie", correct: "false" },
            { text: "Bjarne Stroustrup", correct: "false" },
        ]
    },
    {
        question: "What is Truncation in Java?",
        answer: [
            { text: "Floating-point value assigned to a Floating type", correct: "false" },
            { text: "Floating-point value assigned to an integer type", correct: "true" },
            { text: "Integer value assigned to floating type", correct: "false" },
            { text: "Integer value assigned to floating type", correct: "false" },
        ]
    },
];

const questionelement = document.querySelector(".question");
const answerButton = document.querySelector("#answer-button");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    restState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionelement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct === "true") {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}

function restState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorreect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    restState();
    questionelement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        showNextQuestion();
    } else {
        startQuiz();
    }
});

startQuiz();
