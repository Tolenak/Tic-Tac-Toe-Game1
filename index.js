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


// create a function for a player to win and draw between two players 

// 

