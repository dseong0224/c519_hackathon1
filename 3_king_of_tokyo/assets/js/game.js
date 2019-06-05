class Game {
    constructor () {
        this.player1 = new Player();
        this.player2 = new Player();
        this.diceRoll = new Dice()
    }

    roll() {
        var diceRollResult = this.diceRoll.roll()
        console.log(diceRollResult)
    }


}