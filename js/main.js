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
    currentColor = (correctAnswers[correctAnswers.length-1])
    $("#playarea > ." + currentColor).addClass("flashit")
    
    //$.when(playerTurn()).done(scoringTurn())
    // playerTurn()
    // currentAnswers.push(roundAnswer)
    // scoringTurn()
}

$("#aside > #start").on('click', function () {
    gameStart()
    $("#aside > #start").hide()
})
function roundStart() {
    correctAnswers.push(Math.floor(Math.random() * 4))

    for (let i = 0; i < correctAnswers.length; i++) {

    }
}

function incorrect() {
    score = 0


}

    $("#playarea > #red").on('click', function () {
        console.log("Red has been clicked")
        currentAnswers.push(0)
        $("#playarea > #red").addClass("flashit")
        scoringTurn()
        
    })
    $("#playarea > #green").on('click', function () {
        console.log("Green has been clicked")
        currentAnswers.push(0)
        $("#playarea > #green").addClass("flashit")
        scoringTurn()
    })
    $("#playarea > #blue").on('click', function () {
        console.log("Blue has been clicked")
        currentAnswers.push(0)
        $("#playarea > #blue").addClass("flashit")
        scoringTurn()
    })
    $("#playarea > #yellow").on('click', function () {
        console.log("Yellow has been clicked")
        currentAnswers.push(0)
        $("#playarea > #yellow").addClass("flashit")
        scoringTurn()
    })
    


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