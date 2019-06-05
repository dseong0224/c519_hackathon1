class Dice {
    constructor(){
        this.outcomeArray = [1,2,3,"claw","heart"]; //set array for possible player outcomes 
    }
    roll(){
        //create random number generator to pick from array 
        this.playerRoll1 = this.outcomeArray[Math.floor(Math.random()*this.outcomeArray.length)];   //create roll for roll1 
        this.playerRoll2 = this.outcomeArray[Math.floor(Math.random()*this.outcomeArray.length)];   //create roll for roll2 
        return this.playerRoll1, this.playerRoll2;  //return both roll values 
    }
}