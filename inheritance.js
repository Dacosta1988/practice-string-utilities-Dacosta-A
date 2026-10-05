class Beverage {
    constructor(name, ounces, container) {
        this.name = name;
        this.ounces = ounces;
        this.container = container;
        this.recycled = false;
    }
    recycle(){
        this.recycled = true;
        console.log('\nTha was delicious! I rinsed and recycled the ${this.conatiner} of ${this.name}');
        
        
    }
    describe(){
        console.log(`I have a ${this.ounces}-oz. ${this.container
        } of ${this.name}.`);
    }
}

const water = new Beverage("Water", 16, "bottle");
water.describe();