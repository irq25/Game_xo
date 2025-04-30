
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById("status").innerText = "الفائز: " + currentPlayer;
            gameActive = false;
        } else if (!board.includes("")) {
            document.getElementById("status").innerText = "تعادل!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("status").innerText = "الدور: " + currentPlayer;
        }
    }
}

function checkWinner() {
    const winCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    return winCombos.some(combo => {
        return combo.every(i => board[i] === currentPlayer);
    });
}
