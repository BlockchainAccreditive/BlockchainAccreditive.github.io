document.addEventListener("DOMContentLoaded", () => {
    // Эмуляция набора текста в консоли
    const consoleInput = document.querySelector(".console pre");
    const commands = [
        "> scan --target 10.0.0.0/24",
        "> [OK] 12 hosts found.",
        "> _"
    ];

    let index = 0;
    let charIndex = 0;

    function typeCommand() {
        if (charIndex < commands[index].length) {
            consoleInput.textContent += commands[index][charIndex];
            charIndex++;
            setTimeout(typeCommand, 100);
        } else {
            index++;
            if (index < commands.length) {
                setTimeout(() => {
                    consoleInput.textContent = "> ";
                    charIndex = 0;
                    typeCommand();
                }, 500);
            }
        }
    }

    typeCommand();
});
