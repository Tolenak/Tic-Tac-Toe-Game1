// variables //

// keeping track of the current player starting with X 
let currentPlayer = "X"; 

// empty cells on board - 9 cells 3x3 
let gameBoard = ["","","", "", "", "", "", "", "",]; 

// check if game is active 
let isGameActive = true; 

// winning combinations 
let winPatterns = [ 
    [0, 1, 2], [3,4,5], [6,7,8,], // this will be the rows 
    [0,3,6], [1,4,7], [2,5,8], // this will be the columns 
    [0,4,8], [2,4,6] // this will be the digonal combinitons 
]

// end of variables // 



// create a function that will toggle between player x and o 

function switchPlayer(currentplayer) {
    return currentPlayer === "X" ? "O" : "X"; 

}

// initalize the game board when the web page loads up 
// this eventlistener will be fired as soon as the html page is fully loaded
// attach elements inside of the eventlistener to ensure that it only starts after html pageb is fully loaded 
 document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");      // when page loads allows interaction with gameboard 
    const cells = document.querySelectorAll(".cell");  // allow interaction with indiviual cells 
    const message = document.getElementById("message");  // this is the win or draw message being displayed to players when game finishs 
    const resetButton = document.getElementById("resetButton") // this is the button that allows the game to be reset once pushed 
})


// create a function to check if a player has won or if there is a draw 
function checkWin(board, currentPlayer) {
    for (const combinitons of winPatterns) { 
        let [a,b,c] = combinitons; 
        if (board[a]=== currentPlayer && board[b] === currentPlayer && board [c] === currentPlayer) {
            return true; // this means the player with tic tac toe has won the game 
            // console.log("a player has won the game")
        }
    }
    return false; // if this returns then no player has won the game yet 
    // console.log("no player has won the game yet")
}

function checkDraw (board) {
    return board.every(cell => cell !== "") // console.log("game is a draw!")
}




//create a function that can handle clicks on indiviual cells 
function handleCellClick(index) { 
    // check if clicked cell is empty and the game is still showing active 
    if (gameBoard[index] === "" && isGameActive) { 
    // set the players symbol "x or O" inside of the clicked cell 
    gameBoard[index] = currentPlayer; 
    cells[index].textContent = currentPlayer; // x or o 


    // check to see if the player who just played symbol in cell has won yet 
    if (checkWin(gameBoard, currentPlayer)) {
        message.textContent = `Player ${currentPlayer} Wins!`; // messsage to show current player won if that is the case 

        // if player above wins set the game as inactive so that no more moves can be made after message is displayed 
        isGameActive = false; 
    } else if (checkDraw(gameBoard)) { // if all cells filled check to see if it is a draw 
       // display a message if this comes back true saying that it is a draw 
       message.textContent = "It is a draw!"; 

       // if draw occurs set game to inactive again so no more moves are able to be made 
       isGameActive = false ;
    } else {
        // if this is not the case then the current player if x or o will switch to next player symbol 
        currentPlayer = switchPlayer (currentPlayer); 
    }
    }
    // console.log('this is working')
}



// create a function to display a message whether the outcome is a win or draw 

