$(document).ready(function () {
    initializeGame()
    $('.playerContainer').draggable();
    $("#rollButton").draggable();
    $(".scene").draggable();
});

var newGame;

function initializeGame() {
    newGame = new Game();
}