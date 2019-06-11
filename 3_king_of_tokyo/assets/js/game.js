class Game {
    constructor () {
        this.updateVP = this.updateVP.bind(this);
        this.updateHP = this.updateHP.bind(this);

        this.rollDice = this.rollDice.bind(this);
        $('#rollButton').on('click', this.rollDice);

        this.allPlayers = [new Player("player1"), new Player("player2"), new Player("player3"), new Player("player4")];
        this.currentPlayer = 0;
        this.playerOne = 0;
        this.playerTwo = 1;
        this.playerThree = 2;
        this.playerFour = 3;
        this.newDice = new Dice();
    }

    rollDice() {

        this.rollResult = this.newDice.roll();
        
        if(typeof this.rollResult === 'number'){
            this.updateVP();
        }
        else if(this.rollResult === "claw"){
            // this.allPlayers[this.playerTwo].takeDamage(1)
            this.updateHP()
        }
        
        else {
            this.updateHP()
        }
        this.displayAction(this.rollResult);

        this.currentPlayer++;

        if(this.currentPlayer === this.allPlayers.length){
            this.currentPlayer = 0;
        }
        // this.playerTwo++;
        // this.playerThree++;
        // this.playerFour++;
        // if (this.currentPlayer === this.allPlayers.length) {
        //     this.currentPlayer = 0;
        // }
        // if (this.playerTwo === this.allPlayers.length) {
        //     this.playerTwo = 0;
        // }
        // if (this.playerThree === this.allPlayers.length) {
        //     this.playerThree = 0;
        // }
        // if (this.playerFour === this.allPlayers.length) {
        //     this.playerFour = 0;
        // }

    }

    displayAction (action){

        // var playerOne = this.allPlayers[this.currentPlayer];
        
        var currentPlayerSub = this.allPlayers[this.currentPlayer];

        switch (action) {
            case 1: $('.displayAction').text(currentPlayerSub.name + ' + 1 VP');
                break;

            case 2: $('.displayAction').text(currentPlayerSub.name + ' + 2 VP');
                break;

            case 3: $('.displayAction').text(currentPlayerSub.name + ' + 3 VP');
                break;

            case 'claw': $('.displayAction').text(currentPlayerSub.name + ' attacks everyone');
                break;

            case 'heart': $('.displayAction').text(currentPlayerSub.name + ' + 1 HP');
                break;
        }

    }

    updateHP () {
        if(this.rollResult === 'heart') {
            this.allPlayers[this.currentPlayer].gainHP(1);
            if(this.allPlayers[this.currentPlayer].totalHP() > 12){
                return false
            }
        } else if(this.rollResult === 'claw') {
            if(this.currentPlayer === 0){
                this.allPlayers[this.playerTwo].takeDamage(1);
                this.allPlayers[this.playerThree].takeDamage(1);
                this.allPlayers[this.playerFour].takeDamage(1);
            } else if(this.currentPlayer === 1){
                this.allPlayers[this.playerOne].takeDamage(1);
                this.allPlayers[this.playerThree].takeDamage(1);
                this.allPlayers[this.playerFour].takeDamage(1);
            } else if(this.currentPlayer === 2){
                this.allPlayers[this.playerOne].takeDamage(1);
                this.allPlayers[this.playerTwo].takeDamage(1);
                this.allPlayers[this.playerFour].takeDamage(1);
            } else if(this.currentPlayer === 3){
                this.allPlayers[this.playerOne].takeDamage(1);
                this.allPlayers[this.playerTwo].takeDamage(1);
                this.allPlayers[this.playerThree].takeDamage(1);
            }

            // this.allPlayers[this.playerTwo].takeDamage(1);
            // this.allPlayers[this.playerThree].takeDamage(1);
            // this.allPlayers[this.playerFour].takeDamage(1);
        }

        $('.healthOne').text("Health Points: " + this.allPlayers[this.playerOne].totalHP());
        $('.healthTwo').text("Health Points: " + this.allPlayers[this.playerTwo].totalHP());
        $('.healthThree').text("Health Points: " + this.allPlayers[this.playerThree].totalHP());
        $('.healthFour').text("Health Points: " + this.allPlayers[this.playerFour].totalHP());
        $('.pointsOne').text("Victory Points: " + this.allPlayers[this.playerOne].totalVP());
        $('.pointsTwo').text("Victory Points: " + this.allPlayers[this.playerTwo].totalVP());
        $('.pointsThree').text("Victory Points: " + this.allPlayers[this.playerThree].totalVP());
        $('.pointsFour').text("Victory Points: " + this.allPlayers[this.playerFour].totalVP());

        for( var playerIndex in this.allPlayers){
            if(this.allPlayers[playerIndex].totalHP() <= 0){
                this.loseCondition(this.allPlayers[playerIndex].name)
            }
        }

    }

    updateVP () {
            this.allPlayers[this.currentPlayer].gainVP(this.rollResult);


        $('.healthOne').text("Health Points: " + this.allPlayers[this.playerOne].totalHP());
        $('.healthTwo').text("Health Points: " + this.allPlayers[this.playerTwo].totalHP());
        $('.healthThree').text("Health Points: " + this.allPlayers[this.playerThree].totalHP());
        $('.healthFour').text("Health Points: " + this.allPlayers[this.playerFour].totalHP());
        $('.pointsOne').text("Victory Points: " + this.allPlayers[this.playerOne].totalVP());
        $('.pointsTwo').text("Victory Points: " + this.allPlayers[this.playerTwo].totalVP());
        $('.pointsThree').text("Victory Points: " + this.allPlayers[this.playerThree].totalVP());
        $('.pointsFour').text("Victory Points: " + this.allPlayers[this.playerFour].totalVP());

        if(this.allPlayers[this.currentPlayer].totalVP() >= 20){
            this.winCondition()
        }
    }
    
    loseCondition(playerName){
        // alert (playerName + ' lost!' + '  Created by David Rabosky, Dan Seong, Steve Min');
    }


    winCondition(){
        alert (this.allPlayers[this.currentPlayer].name + ' won!' + '  Created by David Rabosky, Dan Seong, Steve Min');
    }
}

$( function() {
    $("#playerContainer1").draggable();
    $("#playerContainer2").draggable();

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
            //     drop :function()
            //     {
            //         alert("dice rolled");
            //     }
        } );
} );