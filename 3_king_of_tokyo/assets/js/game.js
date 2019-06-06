class Game {
    constructor () {
        this.getPoints = this.getPoints.bind(this);
        this.getHealth = this.getHealth.bind(this);

        this.player1 = new Player(this.getPoints,this.getHealth); // makes player

        this.diceRoll = new Dice(); //rolls a dice

        // this.diceValue1 = null;
        this.roll = this.roll.bind(this);

    }

    roll() {
        var diceRollResult = this.diceRoll.roll();
        console.log('Dice roll result:', diceRollResult);

        this.diceValue1 = diceRollResult[0];

        if(typeof this.diceValue1 === 'number'){
            this.getPoints();
        } else {
            this.getHealth()
        }

    }

    getHealth () {
        console.log('current die:',this.diceValue1);

        if(this.diceValue1 === 'heart') {
            this.player1.addHealth(1);
        }

        console.log('current health', this.player1.accumulatedHealth())

    }

    getPoints () {
        console.log('current die:',this.diceValue1);


            this.player1.addPoint(this.diceValue1);
            console.log("current points", this.player1.accumulatedPoints());

        if(this.player1.accumulatedPoints() >= 20){
            this.winCondition()
        }
    }

    loseCondition (){
        alert ('you lost')
    }


    winCondition(){
        alert ('You won!')
    }





}