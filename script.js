function dice() {
    var player1 = Math.floor(Math.random() * 6 + 1);
    var player2 = Math.floor(Math.random() * 6 + 1);


    if (player1 == player2) {
        document.querySelector("p").textContent = "Draw😞";
        document.querySelector(".dice1").setAttribute("src", "./images/" + player1 + ".png");
        document.querySelector(".dice2").setAttribute("src", "./images/" + player2 + ".png");






    }
    else if (player1 > player2) {
        document.querySelector("p").textContent = "Player 1 wins🚩";
        document.querySelector(".dice1").setAttribute("src", "./images/" + player1 + ".png");
        document.querySelector(".dice2").setAttribute("src", "./images/" + player2 + ".png");
    }
    else {
        document.querySelector("p").textContent = "Player 2 wins⛳";
        document.querySelector(".dice1").setAttribute("src", "./images/" + player1 + ".png");
        document.querySelector(".dice2").setAttribute("src", "./images/" + player2 + ".png");
    }


    alert(randomNumber);


}
dice();