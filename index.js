// had to use w3 and mozillla a lot to help with javascript section // 

// Variables //
let currentPlayer = "X";
let playingBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true

// used google search to figure how combos // 
let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const board = document.getElementById("board");
const message = document.getElementById("message");
const resetButton = document.getElementById("resetButton");

// setting the combinations of possible wins
function checkWinner() {
    for (const combo of winningCombos) {
        const [a,b,c] = combo; 
        if  (playingBoard[a] && playingBoard[a]=== playingBoard[b] && playingBoard[a] === playingBoard[c]){
            return playingBoard[a]; 
        }
    }
        return null; 
}
// combination of possible draws // 
    function checkDraw(){
        return playingBoard.every(cell => cell !== "");
    }

// make x and o appear on board - Had to look on W3 schools/ google search to figure this out// 
function handleClick(index) {
    if  (playingBoard[index] === "" && gameActive) {
     playingBoard[index] = currentPlayer;
        renderBoard();
        const winner = checkWinner();
        // message to display winner or draw//
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
        cell.textContent = playingBoard[i];
    }
}


// reset game board button function // 
function resetGame() {
    currentPlayer = "X";
 playingBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    message.textContent = "";
    renderBoard();
}

// adding event listener to work with function resetGame () button above //
// had to use modzilla to create the event listener for function // 
board.addEventListener("click", (event)=> {
    let cellIndex = Array.from(board.children).indexOf(event.target); 
    if (cellIndex !== -1){
        handleClick(cellIndex)
    }
}); 

// call back for reset game function // 
 resetButton.addEventListener('click', resetGame); 
 resetGame(); 
