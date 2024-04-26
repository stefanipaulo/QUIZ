const questions = [
    {
        question: "Qual é o jogo mais jogado do ano de 2023?",
        options: ["Fortnite", "League of Legends", "Minecraft", "Call of Duty: Warzone"],
        answer: "League of Legends"
    },
    {
        question: "Qual é o jogo mais jogado do ano de 2022?",
        options: ["Fortnite", "League of Legends", "Minecraft", "Call of Duty: Warzone"],
        answer: "Minecraft"
    },
    {
        question: "Qual é o jogo mais jogado do ano de 2021?",
        options: ["Fortnite", "League of Legends", "Minecraft", "Call of Duty: Warzone"],
        answer: "League of Legends"
    }
];

let currentQuestion = 0;
let score = 0;
let playerName = ""; // Variável para armazenar o nome do jogador

document.getElementById("startButton").addEventListener("click", startQuiz);

function startQuiz() {
    playerName = document.getElementById("name").value; // Armazena o nome do jogador
    if (playerName.trim() === "") {
        alert("Por favor, digite seu nome!");
        return;
    }

    document.getElementById("quiz").style.display = "none";
    document.getElementById("questions").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById("questions");
    const question = questions[currentQuestion];

    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <div class="options">
            ${question.options.map((option, index) => `
                <button onclick="checkAnswer('${option}')">${index + 1}. ${option}</button>
            `).join("")}
        </div>
    `;
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
        score++;
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta!");
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const resultsContainer = document.getElementById("results");
    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = `
        <h2>Resultado Final</h2>
        <p>Jogador: ${playerName}</p> <!-- Exibe o nome do jogador -->
        <p>${score} de ${questions.length} perguntas respondidas corretamente.</p>
        <p>Obrigado por participar!</p>
    `;
}