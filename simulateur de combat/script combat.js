class combat{
    constructor(attack,pv,precision) {
        this.attack = attack;
        this.pv = pv;
        this.precision = precision;
    }

    getAttack() {
        console.log(this.attack);
    }
    getPrecis() {
        return Math.random()
    }
}

let GrosGolliate = new combat(5, 50, 0.1)
let David = new combat(2, 10, 0.9)

while(GrosGolliate.pv > 0 && David.pv > 0) {
    
    if(David.getPrecis()<=David.precision){
        David.getAttack()
        GrosGolliate.pv = GrosGolliate.pv - David.attack
        console.log("GrosGolliate n'a plus que " + String(GrosGolliate.pv))
    }
    
    if(GrosGolliate.getPrecis()<=GrosGolliate.precision){
        GrosGolliate.getAttack()
        David.pv = David.pv - GrosGolliate.attack
        console.log("David n'a plus que " + String(David.pv))
    }
}

if(David.pv > GrosGolliate.pv){
    console.log("DAVID A GAGNEEEEE")
}

if(David.pv < GrosGolliate.pv){
    console.log("GROSGOLLIATE A GAGNEEEEE")
}
if(David.pv == GrosGolliate.pv){
    console.log("EGALITEEEEEEEE")
}
