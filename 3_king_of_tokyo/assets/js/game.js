class Game {
    constructor () {
        this.getPoints = this.getPoints.bind(this);
        this.getHealth = this.getHealth.bind(this);

        this.roll = this.roll.bind(this);
        $('#rollButton').on('click', this.roll);

        this.players = [new Player("Player1",this.roll), new Player("Player2",this.roll)];
        this.currentPlayer = 0;
        this.otherPlayers = 1;
        this.diceRoll = new Dice(); //rolls a dice
    }

    roll() {
        //Obtains the value of the dice roll
            //Sends the action/value of the dice roll to their respective functions
        
        this.diceValue1 = this.diceRoll.roll();
        
        if(typeof this.diceValue1 === 'number'){
            this.getPoints();
        }
        else if(this.diceValue1 === "claw"){
            this.players[1].removeHealth(1)
        }
        
        else {
            this.getHealth()
        }
        // this.currentPlayer++;
        // this.otherPlayers++;
        // if (this.currentPlayer === this.players.length) {
        //     this.currentPlayer = 0;
        // }
        // if (this.otherPlayers === this.players.length) {
        //     this.otherPlayers = 0;
        // }

        this.currentPlayer = 1 - this.currentPlayer;
        this.otherPlayers = 1 - this.otherPlayers;
    }

    getHealth () {
        //Modifies health after rolling a heart or a claw
        if(this.diceValue1 === 'heart') {
            this.players[this.currentPlayer].addHealth(1);
        } else if(this.diceValue1 === 'claw') {
            this.players[this.otherPlayers].removeHealth(1);  
        }

        $('.health').text("Health Points: " + this.players[0].accumulatedHealth());
        $('.health2').text("Health Points: " + this.players[1].accumulatedHealth());

        debugger;
        if(this.players[this.otherPlayers].accumulatedHealth() <= 0){
            this.loseCondition();
        }
    }

    getPoints () {
        //Updates points for all players and checks for a winning player
            this.players[this.currentPlayer].addPoint(this.diceValue1);

            $('.points').text("Victory Points: " + this.players[0].accumulatedPoints());
            $('.points2').text("Victory Points: " + this.players[1].accumulatedPoints());

        if(this.players[this.currentPlayer].accumulatedPoints() >= 20){
            this.winCondition()
        }
    }
    
    loseCondition (){
        //Alerts when a player wins by eliminating all other players
        alert (this.players[this.otherPlayers].name + ' won!' + '  Created by David Rabosky, Dan Seong, Steve Min');
    }


    winCondition(){
        //Alerts when a player wins
        alert (this.players[this.currentPlayer].name + ' won!' + '  Created by David Rabosky, Dan Seong, Steve Min');
    }

}