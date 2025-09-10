//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const board = document.getElementById("board");
const startDiv = document.getElementById("start");
const message = document.querySelector(".message");
const cell = document.querySelectorAll(".cell");

let players = [];
let currentPlayer = 0; //which is player 1 technically and 1= player 2 
let gameOver = false;

//submit button peh event listner lagate hai 
submitBtn.addEventListener("click", () => {
    const p1 =document.getElementById("player1").value.trim();
    const p2 = document.getElementById("player2").value.trim();

    if (!p1 || !p2) {
        alert("Please Enter the Player Name for both the players");
        return;
    
    }

    players = [p1,p2];
    startDiv.style.display ="none";
    board.style.display = "block";

    message.innerText= `${players[currentPlayer]}, you're up` ;
});

cell.forEach(cell => {
    cell.addEventListener("click", () =>{
        if (gameOver) return;
        if (cell.classList.contains("taken")) return;

        cell.innerText = currentPlayer === 0 ? "x": "o";
        cell.classList.add("taken");

        //checking the winner 
if (checkWinner()) {
    message.innerText = `${players[currentPlayer]}, congratulations you won!)`;
    gameOver = true;
    return;
}
//turning the switch if the match is not ended yet 
currentPlayer = 1 - currentPlayer;
message.innerText = `${players[currentPlayer]}, you're up`;

    });
});






//checkWinner function 
function checkWinner() {
    const winPatterns = [
         [1,2,3], [4,5,6], [7,8,9], // rows
    [1,4,7], [2,5,8], [3,6,9], // cols
    [1,5,9], [3,5,7]           // diagonals
    ];

    return winPatterns.some(pattern => {
        const [a,b,c] = pattern;
         const valA = document.getElementById(a).innerText;
        const valB = document.getElementById(b).innerText;
         const valC = document.getElementById(c).innerText;

         return valA && valA === valB && valB === valC;

    });
}