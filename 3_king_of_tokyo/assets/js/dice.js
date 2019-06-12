class Dice {
    constructor(){
        this.roll = this.roll.bind(this);

        this.diceArray = [1,2,3,'heart','claw', 'claw'];
    }
    roll(){
        var shuffledArray = this.diceArray.sort(() => Math.random() - 0.5);

        return shuffledArray[Math.floor(Math.random()*shuffledArray.length)];
    }
}