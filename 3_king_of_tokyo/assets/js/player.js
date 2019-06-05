class Player {
    constructor() {
        this.name = null;
        this.points = null;
        this.health = 10;
        this.position = 'out';
        this.diceValue1 = null;
        this.diceValue2 = null;
    }

    enter() {
        /* changes position this.position to 'in' */
    }
    exit() {
        /* changes position this.position to 'out */
    }

    playerAction(/* result of dive roll */){

        // checks if result equals two matching numbers
        //
        // if typeof value1 === 'number' and value2 === 'number'
        // --> this.addPoint(value1)
        //
        //
        // if not two matching numbers
        // check if indexOf(heart or claw)
        //


        this.diceValue1 =
        this.diceValue2 =



        if(typeof this.diceValue1 === 'number'){
            this.addHealth()
        }
        if(typeof this.diceValue2 === 'number'){
            this.health
        }
        //
        // if claw --> attack()


    }

    addHealth(heartAmount) {
        //add health from heart


        if(heartAmount > 0 && typeof heartAmount === 'number') {
            this.health = this.health + heartAmount;
            return this.health;
        } else {
            return false;
        }

    }

    removeHealth(clawAmount) {

        if(clawAmount > 0 && typeof clawAmount === 'number'){
            if(clawAmount > this.health){
                clawAmount = this.health;
                this.health = this.health - clawAmount;
                return this.health;
            } else {
                this.health = this.health-clawAmount;
                return this.health;
            }
        } else {
            return false
        }

    }

    getHealth() {

    }

    addPoint(){

    }

    getPoint(){

    }

}