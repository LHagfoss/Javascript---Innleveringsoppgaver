const rollButton = document.getElementById('rollButton');
const resultDiv = document.getElementById('result');

rollButton.addEventListener('click', () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    resultDiv.innerHTML = 'Resultat: ' + '•'.repeat(roll);
});

// orket ikke lage terningen med bilder, ville bare speede gjennom oppgavene...