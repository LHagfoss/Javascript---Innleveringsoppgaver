const questions = [
    { question: "Hvilket våpen i Valorant tar mest skade?", answer: "Operator" },
    { question: "Hva heter den mest populære dansen i Fortnite?", answer: "Floss" },
    { question: "Hva er navnet på dragen i Minecraft?", answer: "Ender Dragon" },
    { question: "Hvilken farge har sjeldne våpen i Fortnite?", answer: "Gull" },
    { question: "Hva er navnet på den første bossen i Minecraft?", answer: "Wither" }
]; // Array

let score = 0;

questions.forEach(q => {
    const userAnswer = prompt(q.question);
    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
        alert("Riktig!");
        score++;
    } else {
        alert("Feil!");
    }
});

alert(`Du fikk ${score} av ${questions.length} riktige.`);