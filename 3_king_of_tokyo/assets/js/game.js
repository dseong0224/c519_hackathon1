class Game {
    constructor () {
        this.updateVP = this.updateVP.bind(this);
        this.updateHP = this.updateHP.bind(this);
        this.playTurn = this.playTurn.bind(this);

        $('#rollButton').on('click', this.playTurn);

        this.allPlayers = [new Player("P1"), new Player("P2"), new Player("P3"), new Player("P4")];
        this.currentPlayer = 0;
        this.otherPlayersArray = []
    }
    playTurn() {

        console.log(this.allPlayers);

        if(this.allPlayers.length === 1){
            this.winCondition(this.allPlayers[this.currentPlayer])
        }


        $(".stats1").html("");
        $(".stats2").html("");

        this.allPlayers[this.currentPlayer].rollDice();

        this.updateHP();

        this.updateVP();

        this.displayAction(this.allPlayers[this.currentPlayer].rollResult);

        this.otherPlayersArray = [];

        this.currentPlayer++;

        if(this.currentPlayer === this.allPlayers.length){
            this.currentPlayer = 0;
        }
    }
    getOtherPlayers(currentPlayerIndex){
        for(var i=0; i<this.allPlayers.length; i++) {
            if (i !== currentPlayerIndex) {
                this.otherPlayersArray.push(this.allPlayers[i])
            }
        }
    }
    displayAction (action){

        var currentPlayer = this.allPlayers[this.currentPlayer];

        switch (action) {
            case 1: $('.displayAction').text(currentPlayer.name + ' + 1 VP');
                break;

            case 2: $('.displayAction').text(currentPlayer.name + ' + 2 VP');
                break;

            case 3: $('.displayAction').text(currentPlayer.name + ' + 3 VP');
                break;

            case 'claw': $('.displayAction').text(currentPlayer.name + ' attacks everyone');
                break;

            case 'heart': $('.displayAction').text(currentPlayer.name + ' + 1 HP');
                break;
        }

    }

    updateHP () {

        this.getOtherPlayers(this.currentPlayer);

        if (this.allPlayers[this.currentPlayer].rollResult === 'claw') {
            for (var i = 0; i < this.otherPlayersArray.length; i++) {
                this.otherPlayersArray[i].takeDamage(1);
            }
        }

        for(var playerIndex = 0; playerIndex < this.allPlayers.length; playerIndex++){

            this.allPlayers[playerIndex].getHPStats('.health' + playerIndex);

            if(this.allPlayers[playerIndex].totalHP() <= 0){
                this.removePlayer(this.allPlayers[playerIndex])
            }
        }

    }

    updateVP () {
        for(var playerIndex = 0; playerIndex < this.allPlayers.length; playerIndex++){

            this.allPlayers[playerIndex].getVPStats('.points' + playerIndex)
        }

        if(this.allPlayers[this.currentPlayer].totalVP() >= 20) {
            this.winCondition(this.allPlayers[this.currentPlayer])
        }
    }


    removePlayer(loser){
        switch (loser) {
            case this.allPlayers[0]: $('#playerContainer1').addClass('hidden');
                break;
            case this.allPlayers[1]: $('#playerContainer2').addClass('hidden');
                break;
            case this.allPlayers[2]: $('#playerContainer3').addClass('hidden');
                break;
            case this.allPlayers[3]: $('#playerContainer4').addClass('hidden');
                break;
        }

        this.allPlayers.splice(loser, 1);
        loser.lost();


    }

    winCondition(winner){
        alert (winner.name + ' won!' + '  Created by David Rabosky, Dan Seong, Steve Min');
    }
}

$( function() {
    $("#playerContainer1").draggable();
    $("#playerContainer2").draggable();
    $("#playerContainer3").draggable();
    $("#playerContainer4").draggable();

    $("#drop").droppable(
        {
            drop :function()
            {
                alert("Player is in Tokyo");
            }
        } );
} );

$( function() {
    $("#rollButton").draggable();

    $('body').droppable(
        {

        } );
} );