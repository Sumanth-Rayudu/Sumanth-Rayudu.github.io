const gameArea = document.getElementById("game-area");

gameArea.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    gameArea.style.backgroundColor = "white";
    drawCircle(x, y);
});

function drawCircle(x, y) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    gameArea.appendChild(circle);

    setTimeout(() => {
        gameArea.removeChild(circle);
    }, 500);
}
