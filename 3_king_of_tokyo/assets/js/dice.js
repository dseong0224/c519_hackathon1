class Dice {
    constructor(){
        this.outcomeArray = [1,2,3,'heart','claw']; //set array for possible player outcomes

    }
    roll(){
        //create random number generator to pick from array
        var shuffledArray = this.outcomeArray.sort(() => Math.random() - 0.5);

        var randomValue = shuffledArray[Math.floor(Math.random()*shuffledArray.length)];

        return randomValue;

    }
}