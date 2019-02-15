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
let correctAnswers = []
let currentAnswers = []
let score = 0
let currentColor = 0
let roundAnswer = 0

function gameStart() {
    correctAnswers.push(Math.floor(Math.random() * 4))
    $("#playarea > ." + currentColor).addClass("flashit")

    //$.when(playerTurn()).done(scoringTurn())
    // playerTurn()
    // currentAnswers.push(roundAnswer)
    // scoringTurn()
}

function roundStart() {
    correctAnswers.push(Math.floor(Math.random() * 4))

    for (let i = 0; i < correctAnswers.length; i++) {

    }
    if (correctAnswers === currentAnswers) {
        playerTurn()
    }
}

function incorrect() {
    score = 0


}

function scoringTurn() {
    if (roundAnswer === (correctAnswers.length - 1)) {
        console.log("Correct!")
        score += 1
        $("#aside > .score").text(`Score: ${score}`)
        //roundStart()
        // $.when(scoringTurn()).done(roundStart())
    }
    else {
        console.log("Incorrect")
        incorrect()
    }

}

$("#aside > #start").on('click', function () {
    gameStart()
    $("#aside > #start").hide()
})

$("#playarea > #red").on('click', function () {
    console.log("Red has been clicked")
    roundAnswer = 0
    scoringTurn()
    
})
$("#playarea > #green").on('click', function () {
    console.log("Green has been clicked")
    roundAnswer = 1
    scoringTurn()
})
$("#playarea > #blue").on('click', function () {
    console.log("Blue has been clicked")
    roundAnswer = 2
    scoringTurn()
})
$("#playarea > #yellow").on('click', function () {
    console.log("Yellow has been clicked")
    roundAnswer = 3
    scoringTurn()
})