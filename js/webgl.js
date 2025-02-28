const canvas = document.getElementById('ticketCanvas');
const ctx = canvas.getContext('2d');

// Настройка WebGL
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

if (!gl) {
    console.error('WebGL не поддерживается вашим браузером');
} else {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

// Анимация с использованием Canvas
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.font = '20px Arial';
    ctx.fillText('Электронный билет', 10, 30);

    requestAnimationFrame(draw);
}

draw();

// Обновление информации о билете
document.getElementById('flightNumber').innerText = 'AB123';
document.getElementById('departure').innerText = 'Москва (SVO)';
document.getElementById('destination').innerText = 'Нью-Йорк (JFK)';
document.getElementById('date').innerText = '2025-03-01';
document.getElementById('time').innerText = '14:30';
document.getElementById('passenger').innerText = 'Иван Иванов';
