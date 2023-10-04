// variables 

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


