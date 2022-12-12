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
const gameBoardEl = document.getElementsByClassName("board");
const resetBtnEl = document.getElementById("btn")

/*----------------------------- Event Listeners -----------------------------*/
window.addEventListener('load', init)
gameBoardEl.addEventListener('click', handleClick);
resetBtnEl.addEventListener('click', init)
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

function handleClick () {
    const sqIdx = evt.target.id
    if (board[sqIdx].innerHTML !== null) return
    placePiece(sqIdx)
    checkForTie()
    checkForWinner()
    switchPlayerTurn()
    render()
}

function placePiece(index) {
    board[index] = turn
}

function checkForTie () {
    if (!board.includes(null)) {
        tie = true
    }
}

function checkForWinner () {
    winningCombos.forEach(function(winArr) {
        winArr.reduce(function(prev, num) {
            return Math.abs(board[prev] + board[num])
        }, 0);
        if (sum === 3) {
            winner = true
        }
    })
    
}

function switchPlayerTurn () {
    if (winner === true) {
        return 
    }
    return turn *= -1
}
