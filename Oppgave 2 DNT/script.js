document.getElementById('checkInButton').addEventListener('click', function() {
    const hours = new Date().getHours();
    const greeting = hours < 10 ? 'God morgen din fjellgeit' : 'God dag din fjellgeit';
    document.getElementById('greeting').innerText = greeting;
});

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);