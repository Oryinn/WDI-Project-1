/*game logic method - creates an array that stores which
color needs to light up (chosen with a math.rand).

onclick method for each of the game buttons that returns the variable to the array function
and compares it to the stored computer value 
on
Maybe add a seperate function to check

click start -> gamestart function runs
does the first flash then it calls player turn function that lets a player click a box
once a player clicks a box the player turn function should finish and move(.when, .done) to scoring turn function
scoring turn function checks if the answer is correct by comparing the arrays of answers
when scoring function is done use a promise method to go to round start function (if correct) or incorrect function(if incorrect
round start function should also move into the player turn function
*/
correctAnswers = [];
currentAnswers = [];
score = 0;

function gameLoop() {
    $("#score").text(score);
    //On every new round, clear the current answers
    correctAnswers.push(Math.floor(Math.random() * 4));
    flashCorrectAnswers();
}

function flashCorrectAnswers() {
    for (let i = 0; i < correctAnswers.length; i++) {
        setTimeout(() => {
            flashButton(correctAnswers[i]);
        }, (i+1) * 1000);
    }
}

function flashButton(id) {
    const selectedSquare = $("#" + id);
    selectedSquare.css('opacity', '.3');
    setTimeout(() => {
        selectedSquare.css('opacity', '1');
    }, 600);
}

function checkScore() {
    let correctAnswersSubArray = correctAnswers.slice(0, currentAnswers.length);
    correctAnswersSubArray.forEach((value, index) => {
        if (value !== currentAnswers[index]) {
            loss()
        }
    });
    if (correctAnswers.length === correctAnswersSubArray.length) {
        setTimeout(() => {
            currentAnswers = [];
            score++;
            gameLoop();
        }, 1000);
    }
}

function loss() {
    alert("You lost - make this not use an alert later")
    score = 0
    $("#aside > #start").show();
}


//Event Listeners
$("#aside > #start").on('click', function () {
    gameLoop();
    $("#aside > #start").hide();
});

$(".gameButton").on('click', function () {
    flashButton(this.id);
    currentAnswers.push(parseInt(this.id));
    checkScore();
});