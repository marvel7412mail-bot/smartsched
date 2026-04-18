function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]]; // Swap elements
    }
    return answers;
}

// Example usage:
const quizAnswers = ['A', 'B', 'C', 'D'];
const shuffledAnswers = shuffleAnswers(quizAnswers);
console.log(shuffledAnswers);