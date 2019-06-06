class Game {
    constructor () {
        this.getDiceInfo = this.getDiceInfo.bind(this);

        this.player1 = new Player(this.getDiceInfo);
        this.player2 = new Player(this.getDiceInfo);
        this.diceRoll = new Dice();


        this.diceValue1 = null;
        this.diceValue2 = null;
        this.roll = this.roll.bind(this);

    }

    roll() {
        var diceRollResult = this.diceRoll.roll();
        console.log('Dice roll result:', diceRollResult);

        this.diceValue1 = diceRollResult[0];
        this.diceValue2 = diceRollResult[1];

        this.diceRoll.pickedDice = [];
    }

    getDiceInfo(){
        console.log(this.diceValue1, this.diceValue2)
    }





}