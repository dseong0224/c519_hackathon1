class Game {
    constructor () {
        this.getPoints = this.getPoints.bind(this);
        this.getHealth = this.getHealth.bind(this);

        this.roll = this.roll.bind(this);
        $('#rollButton').on('click', this.roll);

        // this.player1 = new Player(this.roll);
        this.players = [new Player("Player1",this.roll), new Player("Player2",this.roll)];
        this.currentPlayer = 0;
        this.otherPlayers = !0
        this.diceRoll = new Dice(); //rolls a dice
    }

    roll() {
        
        if (this.currentPlayer === this.players.length) {
            this.currentPlayer = 0;
        }
        this.diceValue1 = this.diceRoll.roll();
        console.log('Dice roll result:', this.diceValue1);//Player 2

        // this.diceValue1 = this.diceRoll.roll();

        if(typeof this.diceValue1 === 'number'){
            this.getPoints();
        }
        else if(this.diceValue1 === "claw"){
            this.players[1].removeHealth(1)
        }
        
        else {
            this.getHealth()
        }
        this.currentPlayer++;
    }

    // attack(player) {
    //     // this.player
    //     if(this.diceValue1 === 'claw') {
    //         this.players[1].removeHealth(1);
    //         // this.players[this.currentPlayer].removeHealth(1)
    //     }
    // }

    getHealth () {
        // console.log('current die:',this.diceValue1);

        // if(this.diceValue1 === 'heart') {
        //     this.player1.addHealth(1);
        // }
        if(this.diceValue1 === 'heart') {
            this.players[this.currentPlayer].addHealth(1);
        } else if(this.diceValue1 === 'claw') {
            this.players[this.otherPlayers].removeHealth(1);  
        }
        console.log("Player:", this.players[this.currentPlayer])

        console.log('current health', this.players[this.currentPlayer].accumulatedHealth())
        $('.health').append(this.players[this.currentPlayer].accumulatedHealth());
    }

    getPoints () {
        // console.log('current die:',this.diceValue1);

        // this.roll();
            this.players[this.currentPlayer].addPoint(this.diceValue1);
            console.log("current points", this.players[this.currentPlayer].accumulatedPoints());
            $('.points').append(this.players[this.currentPlayer].accumulatedPoints());

        if(this.players[this.currentPlayer].accumulatedPoints() >= 20){
            this.winCondition()
        }
    }
    
    loseCondition (){
        // heart = 0
        alert ('You lost')
    }


    winCondition(){
        alert (this.players[this.currentPlayer].name + ' won!')
    }

}