class Burger{
    constructor(toppings, protein, containsGluten) {
        this.toppings = toppings;
        this.protein = protein;
        this.containsGluten = containsGluten;
    }

    describe() {
        console.log("This is is a " + this.protein + " burger with the following toppings: ", this.toppings);
    }
}

const burger1 = new Burger(
    ["tomato", "pickle", "ketchup"], 
    "beef",
    true
);
const burger2 = new Burger(
    ["mayo", "pickle"], 
    "chicken",
    false
);

console.log(burger1);
console.log(burger2);


class BurgerWithSide extends Burger {
    constructor(toppings, protein, containsGluten, side) {
        super(toppings, protein, containsGluten);
        
        this.side = side;
    }

    friesWithThat() {
        return this.side.toLowerCase() === "fries";
    }
}

const burger3 = new BurgerWithSide(
    ["mustard", "onions"],
    "Beyond Beef",
    false,
    "fries"
);

burger3.describe();
console.log(burger3.friesWithThat());