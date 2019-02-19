correctAnswers = [];
currentAnswers = [];
score = 0;
highscore = 0;
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
        }, (i + 1) * 1000);
    }
}
function flashButton(id) {
    const selectedSquare = $("#" + id);
    let currentAudio = $(`.${id}`);
    currentAudio.trigger('play');
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
    //let lossAudio = $(".losersound");
    //lossAudio.trigger('play');
    if (score > highscore){
        highscore = score;
        $("#hiscore").text(highscore);
    }
    score = 0
    currentAnswers = []
    correctAnswers = []
    $("#aside > #start").show();
    $(".gameButton").hide();
}
$("#aside > #start").on('click', function () {
    gameLoop();
    $("#aside > #start").hide();
    $(".gameButton").show();
});
$(".gameButton").on('click', function () {
    flashButton(this.id);
    currentAnswers.push(parseInt(this.id));
    checkScore();
});