class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }   
    honk() {
        console.log("beep")
    }
    
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
    }
    numWheels = 4;
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
    }

    revEngine() {
        return "vrooom"
    }

    numWheels = 2
}

//learning case: adding things withink constructor, will create elements in the class Object. - doesnt necessarily have to be a parameter passed in
class Garage { /// so other classes can interact with other clases it doesnt exted to
    constructor(capacity) {
        this.arr = []; 
        this.capacity = capacity // what is the purpose of capacity???
    }
    //learning case: can wrap a logic with parens and add ! for opposite //test this out
    //learning case: instance. to check if variable evaluates to a class for example
    add(newCar) { //dont need this in the parameter since its just a variable name
        if (!(newCar instanceof Vehicle)) {
            return "please input Vehicle"
        }
        
        //learning case: return works without throwing error
        if (this.arr.length >= this.capacity) {
            return " max capacity "
        }

        this.arr.push(newCar)
    }
}