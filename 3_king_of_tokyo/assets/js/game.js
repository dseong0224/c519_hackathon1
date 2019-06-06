class Game {
    constructor () {
        this.getPoints = this.getPoints.bind(this);
        this.roll = this.roll.bind(this);
        // this.getHealth = this.getHealth.bind(this);

        this.player1 = new Player(this.roll); // makes player

        this.diceRoll = new Dice(); //rolls a dice


    }

    roll() {
        this.diceValue1 = this.diceRoll.roll();
        console.log('Dice roll result:', this.diceValue1);

        // this.diceValue1 = this.diceRoll.roll();

        if(typeof this.diceValue1 === 'number'){
            this.getPoints();
        }
        //else {
        //     this.getHealth()
        // }

    }

    // getHealth () {
    //     console.log('current die:',this.diceValue1);
    //
    //     if(this.diceValue1 === 'heart') {
    //         this.player1.addHealth(1);
    //     }
    //
    //     console.log('current health', this.player1.accumulatedHealth())
    //
    // }

    getPoints () {
        // console.log('current die:',this.diceValue1);

        // this.roll();
            this.player1.addPoint(this.diceValue1);
            console.log("current points", this.player1.accumulatedPoints());

        if(this.player1.accumulatedPoints() >= 20){
            this.winCondition()
        }
    }

    loseCondition (){
        alert ('You lost')
    }


    winCondition(){
        alert ('You won!')
    }





}