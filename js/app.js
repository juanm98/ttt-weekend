/*-------------------------------- Constants --------------------------------*/
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
let board = [1, -1, null, null, null, null, null, null, null]
const turn = 1
const winner = false
const tie = false


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr0, .sqr1, .sqr2, .sqr3, .sqr4, .sqr5, .sqr6, .sqr7, .sqr8")
const messageEl = document.getElementById("message")
const gameBoard = document.getElementsByClassName("board");


/*----------------------------- Event Listeners -----------------------------*/
window.addEventListener('load', init)
gameBoard.addEventListener('click', handleClick);

/*-------------------------------- Functions --------------------------------*/
function init() {
    render()
}

function render() {
updateBoard(board);
updateMessage(winner, tie);
}

function updateBoard(board) {
board.forEach((square, index) => {
    const squareEl = squareEls[index]
    if(square === 1) {
        return squareEl.innerText = "X";
    } else if (square === -1) {
        return squareEl.innerText = "O";
    } else {
        return squareEl.innerText = "";
    }
});
}


function updateMessage (winner, tie) {
    if (!winner && !tie) {
        return "It's the player's turn"
    } else if (winner) {
        return "The" + winner + "won"
    } else {
        return "It's a tie"
    }
}

function handleClick (evt) {
    
}