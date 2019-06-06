class Game {
    constructor () {
        this.getPoints = this.getPoints.bind(this);
        this.getHealth = this.getHealth.bind(this);

        this.roll = this.roll.bind(this);

        // this.player1 = new Player(this.roll);
        this.players = [new Player(this.roll)];
        this.currentPlayer = 0;
        this.diceRoll = new Dice(); //rolls a dice
    }

    roll() {
        this.diceValue1 = this.diceRoll.roll();
        console.log('Dice roll result:', this.diceValue1);

        // this.diceValue1 = this.diceRoll.roll();

        if(typeof this.diceValue1 === 'number'){
            this.getPoints();
        }
        else {
            this.getHealth()
        }

    }

    getHealth () {
        // console.log('current die:',this.diceValue1);

        // if(this.diceValue1 === 'heart') {
        //     this.player1.addHealth(1);
        // }
        if(this.diceValue1 === 'health') {
            this.players[0].addHealth(1);
            this.players[this.currentPlayer].addHealth(1)
        }

        console.log('current health', this.players[0].accumulatedHealth())
        $('.health').append(this.players[0].accumulatedHealth());
    }

    getPoints () {
        // console.log('current die:',this.diceValue1);

        // this.roll();
            this.players[0].addPoint(this.diceValue1);
            console.log("current points", this.players[0].accumulatedPoints());
            $('.points').append(this.players[0].accumulatedPoints());

        if(this.players[0].accumulatedPoints() >= 20){
            this.winCondition()
        }
    }

    loseCondition (){
        // heart = 0
        alert ('You lost')
    }


    winCondition(){
        alert ('You won!')
    }

}