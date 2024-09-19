document.getElementById('calculatePluss').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').textContent = sum;
});

document.getElementById('calculateMinus').addEventListener('click', function() {
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const difference = num3 - num4;
    document.getElementById('resultMinus').textContent = difference;
});

// ikke viktig bare en refresh knapp som clearer alle inputs og resultater
document.getElementById('refresh').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('num4').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('resultMinus').textContent = '';
});