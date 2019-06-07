class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.health = 10;
        this.addPoint = this.addPoint.bind(this);
        this.addHealth = this.addHealth.bind(this);
    }
    //attack other player 
    attack(damagedPlayer){
        damagedPlayer.removeHealth()
    }
    //add to current player points
    addPoint(points) {
        this.points += points;
    }
    //current player victory point
    accumulatedPoints() {
        return this.points
    }
    //add current player health
    addHealth(hearts) {
        this.health += hearts;
        console.log('hearts added', hearts)
    }
    //remove current player heatlth 
    removeHealth(hearts){
        this.health -= hearts; 
        console.log('hearts removed: ' , hearts);  
    }
    //current player health
    accumulatedHealth() {
        return this.health
    }

}