/*-------------------------------- Constants --------------------------------*/
// 5a) In a constant called `winningCombos` define the eight possible winning combinations as an array of arrays.  
let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7]
]


/*---------------------------- Variables (state) ----------------------------*/
// Step 1 - Define the required variables used to track the state of the game
let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/
// 2a) In a constant called `squareEls`, store the nine elements 
  //    representing the squares on the page.
const squareEls = document.querySelectorAll(".sqr0, .sqr1, .sqr2, .sqr3, .sqr4, .sqr5, .sqr6, .sqr7, .sqr8")
// 2b) In a constant called `messageEl`, store the element that displays the 
  //    game's status on the page.
const messageEl = document.getElementById("message")
const gameBoardEl = document.querySelector(".board"); // had it by getElementByClass
const resetBtnEl = document.getElementById("btn")

/*----------------------------- Event Listeners -----------------------------*/
gameBoardEl.addEventListener('click', handleClick);
resetBtnEl.addEventListener('click', init)
/*-------------------------------- Functions --------------------------------*/
// 3a) Create a function called `init`.
// 3b) Call this `init` function when the app loads.
init()

function init() {
     // 3c) Set the `board` variable to an array containing nine `null`s to represent empty squares.
    board = [null, null, null, null, null, null, null, null, null]
    // 3d) Set the `turn` to `1`
    turn = 1
    // 3e) Set the `winner` to false.
    winner = false
     // 3f) Set `tie` to false.
    tie = false
     // 3g) Call a function called `render` at the end of the `init` function.
    render()
}
// 4a) Create a function called `render`
function render() {
// 4f) Invoke both the `updateBoard` and the `updateMessage` functions
//     inside of your `render` function.
updateBoard();
updateMessage();
}
 // 4b) Create a function called `updateBoard`.
function updateBoard() {
board.forEach((square, index) => {
    // This is looping through each element of the board array
    const squareEl = squareEls[index]
    if(square === 1) {
        // If square is = to 1 it will return X
        return squareEl.innerText = "X";
    } else if (square === -1) {
        // If square is = to -1 it will return O
        return squareEl.innerText = "O";
    } else {
        // Else it will give an empty string
        return squareEl.innerText = "";
    }
});
}

// 4d) Create a function called `updateMessage`
function updateMessage () {
     // If both `winner` and `tie` have a value of false (meaning the game is still in progress), render whose turn it is. 
    if (!winner && !tie) {
        messageEl.textContent = "It's players turn" // I just had return on all of these
        // If `winner` is false, but `tie` is true, render a tie message.
    } else if (!winner && tie) {
        messageEl.textContent = "The game is a tie";
         // Otherwise, render a congratulatory message to the player that has won.
    } else {
        messageEl.textContent = "Congratulations! You won the game.";
    }
}
// Step 6 - Handle a player clicking a square with a `handleClick` function
 // 6a) Create a function called `handleClick`. It will have an `evt` parameter
function handleClick (evt) {
    const sqIdx = parseInt(evt.target.id[2])
    if(isNaN(sqIdx) || board[sqIdx] || winner) return placePiece(sqIdx)
    // const sqIdx = evt.target.id
    // if (board[sqIdx].innerHTML !== null) return
    placePiece(sqIdx)
    checkForTie()
    checkForWinner()
    switchPlayerTurn()
    render()
}
// 6.1a) Create a function named placePiece that accepts an `idx` parameter.
function placePiece(idx) {
// 6.1b) Update the `board` array at the `idx` so that it is equal to the current value of `turn`.
    board[idx] = turn
}

function checkForTie () {
    if (board.includes(null)) {
        tie = true
    }
}

function checkForWinner () {
    winningCombos.forEach(function(winArr) {
        let sum =
        winArr.reduce(function(prev, num) {
            return Math.abs(board[prev] + board[num])
        }, 0);
        if (sum === 3) {
            winner = true
        }
    })
    
}

function switchPlayerTurn () {
    // if (winner === true) {
    //     return 
    // }
    // return turn *= -1
    if(!winner) turn *= -1
}
