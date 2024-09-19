const evenNumbers = [];
for (let i = 1; i <= 60; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
document.querySelector(".even-numbers").innerHTML += `<p>Partall: ${evenNumbers.join(', ')}</p>`;

const divisibleByThree = [];
for (let i = 1; i <= 60; i++) {
    if (i % 3 === 0) {
        divisibleByThree.push(i);
    }
}
document.querySelector(".numbers-divided").innerHTML += `<p>Tall delelig med 3: ${divisibleByThree.join(', ')}</p>`;

function finnTallene(min, max, divisor) {
    const result = [];
    for (let i = min; i <= max; i++) {
        if (i % divisor === 0) {
            result.push(i);
        }
    }
    return result;
}

document.querySelector(".numbers-between").innerHTML += `<p>Tall mellom 20 og 80 delelig med 5: ${finnTallene(20, 80, 5).join(', ')}</p>`;

const button = document.getElementById('findNumbersButton');

button.onclick = () => {
    const min = parseInt(document.getElementById('minInput').value);
    const max = parseInt(document.getElementById('maxInput').value);
    const divisor = parseInt(document.getElementById('divisorInput').value);
    const numbers = finnTallene(min, max, divisor);
    document.querySelector(".numbers-between").innerHTML += `<p>Tall mellom ${min} og ${max} delelig med ${divisor}: ${numbers.join(', ')}</p>`;
};