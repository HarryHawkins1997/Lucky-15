console.log("connected...");

var topHeader = document.querySelector("#topHeader");
var statusHeader = document.querySelector("#statusHeader");
var turn = document.querySelector("#playerTurn");
var player1ScoreText = document.querySelector("#playerOneScore");
var player2ScoreText = document.querySelector("#playerTwoScore");
var numberItems = document.querySelectorAll(".numberItem");

var playing = false;
turn.textContent = "1";
var startBtn = document.querySelector("#startBtn");
var player1Score = 0;
var player2Score = 0;
var playerOnesTurn = true;
var finished = false;
var buttonNumber = 1;
var winner = "";

startBtn.addEventListener("click", function(){
	playBtnClick();
})


startBtn.addEventListener("click", function(){
    console.log("new game started...");
})

numberItems.forEach(function(item){
		item.addEventListener("click", function(){
			numberClick(this);
	})
})

function playBtnClick(){
	// display start scores
	// add event listeners
	if (playing){
		playing = false;
	} else {
		playing = true;
		startBtn.textContent = "Restart";
	}
	startUp();
}

function startUp(){
	statusHeader.textContent = "Playing...";
	player1Score = 0;
	player2Score = 0;
	playerOnesTurn = true;
	finished = false;
	buttonNumber = 1;
	winner = "";
	player1ScoreText.textContent = player1Score;
	player2ScoreText.textContent = player2Score;

	numberItems.forEach(function(item){
		item.textContent = buttonNumber;
		buttonNumber++;
})
}

function numberClick(numberPicked){
	if (playing) {
		// increase score
		if (playerOnesTurn){
			player1Score += parseInt(numberPicked.textContent);
			player1ScoreText.textContent = player1Score;
		} else {
			player2Score += parseInt(numberPicked.textContent);
			player2ScoreText.textContent = player2Score;
		}

		numberPicked.textContent = "Gone!";

		// check winning condition 
		if (player1Score >= 15 || player2Score >= 15){
			end();
		}

		playerOnesTurn = !playerOnesTurn;
		if (playerOnesTurn){
			turn.textContent = "1";
		} else {
			turn.textContent = "2";
		}
	}
}

function end(){
	if (player1Score == 15 || player2Score > 15){
		winner = "Player 1 Wins!";
	} else if (player2Score == 15 || player1Score > 15){
		winner = "Player 2 Win!";
	} else{
		winner = "Draw!";
	}
	statusHeader.textContent = winner;
	playing = false;
}