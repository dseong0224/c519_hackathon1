class Player {
    constructor(callback) {
        this.name = name;
        this.points = 0;
        this.health = 10;
        this.callback = callback;
        $('#rollButton').on('click',this.callback);
        this.addPoint = this.addPoint.bind(this);
        this.addHealth = this.addHealth.bind(this);
    }


    addPoint(points){
        this.points += points;
        // console.log('points added',points)
    }

    accumulatedPoints(){
        return this.points
    }

    addHealth (hearts){
        this.health += hearts;
        // console.log('hearts added', hearts)
    }

    accumulatedHealth(){
        return this.health
    }


}
