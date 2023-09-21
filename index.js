
// Variables //
let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const board = document.getElementById("board");
const message = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
        }
    }
    return null;
}

function checkDraw() {
    return boardState.every(cell => cell !== "");
}

function handleClick(index) {
    if (boardState[index] === "" && gameActive) {
        boardState[index] = currentPlayer;
        renderBoard();
        const winner = checkWinner();
        if (winner) {
            message.textContent = `Player ${winner} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            message.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function renderBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementsByClassName("cell")[i];
        cell.textContent = boardState[i];
    }
}

function resetGame() {
    currentPlayer = "X";
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    message.textContent = "";
    renderBoard();
}

board.addEventListener("click", (event) => {
    const cellIndex = Array.from(board.children).indexOf(event.target);
    if (cellIndex !== -1) {
        handleClick(cellIndex);
    }
});

resetButton.addEventListener("click", resetGame);
resetGame();