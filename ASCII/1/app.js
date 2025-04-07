// Command System Core
const commandHistory = [];
let historyIndex = -1;

document.getElementById('commandInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        processCommand(e.target.value);
        e.target.value = '';
    } 
    if (e.key === 'ArrowUp') {
        historyIndex = Math.max(historyIndex - 1, -1);
        e.target.value = commandHistory[commandHistory.length + historyIndex] || '';
    }
    if (e.key === 'ArrowDown') {
        historyIndex = Math.min(historyIndex + 1, 0);
        e.target.value = commandHistory[commandHistory.length + historyIndex] || '';
    }
});

// Command Processor
function processCommand(cmd) {
    commandHistory.push(cmd);
    historyIndex = -1;
    const output = document.getElementById('output');
    
    // Simulate terminal typing
    output.innerHTML += `<div>> ${cmd}</div>`;
    
    switch(cmd.split(' ')[0]) {
        case 'scan':
            output.innerHTML += `<div class="cyan-text">[OK] Found ${Math.floor(Math.random()*20)} active hosts</div>`;
            break;
        case 'help':
            output.innerHTML += `<pre>
╔══[HELP]════════════════╗
║ scan [target] - Scan   ║
║ decrypt [file] - Crack ║
║ clear - Clean console  ║
║ matrix - Easter egg    ║
╚════════════════════════╝</pre>`;
            break;
        case 'clear':
            output.innerHTML = '';
            break;
        case 'matrix':
            startMatrixEffect();
            break;
        default:
            output.innerHTML += `<div class="red-text">ERR: Unknown command "${cmd}"</div>`;
    }
    
    output.scrollTop = output.scrollHeight;
}

// Dynamic Updates
setInterval(() => {
    document.getElementById('loadPercent').textContent = 
        `${Math.floor(Math.random()*30 + 70)}%`;
}, 3000);

// Easter Egg
function startMatrixEffect() {
    const chars = '01ABCDEF%&';
    document.body.style.position = 'relative';
    
    setInterval(() => {
        const el = document.createElement('div');
        el.style = `position: fixed; 
            color: #00FF44; 
            top: ${Math.random()*100}vh; 
            left: ${Math.random()*100}vw;
            pointer-events: none;
            animation: fall 3s linear`;
        el.textContent = chars.repeat(10);
        document.body.appendChild(el);
        
        setTimeout(() => el.remove(), 3000);
    }, 100);
}
