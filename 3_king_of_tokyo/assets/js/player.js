class Player {
    constructor(name) {
        this.name = name;
        this.point = 0;
        this.health = 10;
        this.gainVP = this.gainVP.bind(this);
        this.gainHP = this.gainHP.bind(this);
    }

    gainVP(point) {
        this.point += point;
    }
    totalVP() {
        return this.point
    }
    gainHP(heart) {
        this.health += heart;
        console.log('heart added', heart)
    }
    takeDamage(heart){
        this.health -= heart;
        console.log('heart removed: ' , heart);
    }
    totalHP() {
        return this.health
    }

}