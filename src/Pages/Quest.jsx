const Quest = [
    {
        question: "What is software engineering?",
        options: [
            "A. Process of building computer programs",
            "B. Process of designing computer hardware",
            "C. Process of analyzing data",
            "D. Process of building mechanical devices"
        ],
        correctAnswer: "A"
    },
    {
        question: "What does 'SDLC' stand for in software engineering?",
        options: [
            "A. Software Development Lifecycle",
            "B. System Design and Lifecycle",
            "C. Software Design and Logic Control",
            "D. Systematic Design for Lifecycle Control"
        ],
        correctAnswer: "A"
    },
    {
        question: "What is 'Agile' in the context of software development?",
        options: [
            "A. A specific programming language",
            "B. A project management approach",
            "C. A software testing technique",
            "D. A software design pattern"
        ],
        correctAnswer: "B"
    },
    {
        question: "Which programming language is commonly used for web development?",
        options: [
            "A. Java",
            "B. Python",
            "C. JavaScript",
            "D. C++"
        ],
        correctAnswer: "C"
    },
    {
        question: "What is version control in software engineering?",
        options: [
            "A. Managing different versions of software",
            "B. Controlling access to the software",
            "C. Tracking changes in the software code",
            "D. Controlling the software license"
        ],
        correctAnswer: "C"
    },
    // Add more questions here
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit-btn");

function buildQuiz() {
    const output = [];
questions.forEach((question, index) => {
const options = [];
for (const option of question.options) {
    options.push(`<label><input type="radio" name="question${index}" value="${option.charAt(0)}">${option}</label><br>`);
}
output.push(`<div class="question">${index + 1}. ${question.question}</div>
             <div class="options">${options.join('')}</div><br>`);
});
quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    let score = 0;
    questions.forEach((question, index) => {
        const answerContainer = answerContainers[index];
        const userAnswer = (answerContainer.querySelector(`input[name=question${index}]:checked`) || {}).value;
        if (userAnswer === question.correctAnswer) {
            score++;
            answerContainer.style.color = 'green';
        } else {
            answerContainer.style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
}

function checkAnswers() {
    buildQuiz();
    submitButton.addEventListener("click", showResults);
}

checkAnswers();
