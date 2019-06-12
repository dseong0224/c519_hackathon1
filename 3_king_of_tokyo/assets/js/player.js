class Player {
    constructor(name) {
        this.name = name;
        this.point = 0;
        this.health = 10;
        this.gainVP = this.gainVP.bind(this);
        this.gainHP = this.gainHP.bind(this);
        this.takeDamage = this.takeDamage.bind(this)
        this.rollDice = this.rollDice.bind(this);
        this.getHPStats = this.getHPStats.bind(this);
        this.getVPStats = this.getVPStats.bind(this)

        this.newDice = new Dice();
    }
    rollDice() {
        this.rollResult = this.newDice.roll();

        if(typeof this.rollResult === 'number'){
            this.gainVP(this.rollResult);
        }
        else if (this.rollResult === 'heart') {
            this.gainHP(1)
        }
    }
    gainVP(point) {
        if(this.point < 20) {
            this.point += point;
        }
    }
    gainHP(heart) {
        if(this.health < 12) {
            this.health += heart;
        } else {
            return false;
        }
    }
    totalVP() {
        return this.point
    }
    totalHP() {
        return this.health
    }
    takeDamage(heart){
        this.health -= heart;
    }
    getHPStats(playerStatsDisplay){
        $(playerStatsDisplay).text(this.name+' HP: ' + this.totalHP());
    }
    getVPStats(playerStatsDisplay){
        $(playerStatsDisplay).text(this.name+' VP: ' + this.totalVP());
    }
    lost(){
        this.constructor = null;
    }

}