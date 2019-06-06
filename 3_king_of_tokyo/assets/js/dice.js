class Dice {
    constructor(){
        this.outcomeArray = [1,2,3,"claw","heart"]; //set array for possible player outcomes
        this.pickedDice = [];

    }
    roll(){
        //create random number generator to pick from array
        var shuffledArray = this.outcomeArray.sort(() => Math.random() - 0.5);

        // this.pickedDice.push(shuffledArray[0]);

        console.log('Outcome:', this.pickedDice);

        console.log('array:',shuffledArray[0]);


        return shuffledArray;
    }
    pickDice(){
        this.roll()
    }
}