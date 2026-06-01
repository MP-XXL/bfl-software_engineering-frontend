class Car {
    private totalCars: object[] = []
    
    constructor(
        public engineType: string| number, 
        public color: string, 
        public vin: string| number){
        this.engineType = engineType 
        this.color = color
        this.vin = vin
    }

    public getModel() {
        return "v1"
    }

    public getAllCars(){
        return this.totalCars
    }

    get cars(){
        return this.totalCars
    }
}


class BMW extends Car{
    
    constructor(
        engineType: (string | number), 
        color: string, 
        vin: (string | number),  
        protected brand: string,
        protected carType: string){
        super(engineType, color, vin)
        this.carType = carType
        this.brand = brand
    }

    createBMW(){
       let stock = this.getAllCars()
        stock.push({
            engineType: this.engineType,
            color: this.color,
            vin: this.vin,
            carType: this.carType,
            brand: this.brand
        })

        return stock

    }

    getModel(){
        return "M5"
    }
}


class Mercedes extends Car{

    constructor(
        engineType: (string | number), 
        color: string, 
        vin: (string | number), 
        protected carType: string, 
        protected brand: string){
        super(engineType, color, vin)
        this.carType = carType
        this.brand =brand
    }

    createMercedes(){
        let stock = this.getAllCars()
        stock.push({
            engineType: this.engineType,
            color: this.color,
            vin: this.vin,
            carType: this.carType,
            brand: this.brand
        })

        return stock

    }

    getModel(){
        return "GLE 63"
    }
}




let bmw = new BMW ("V8", "Black", "11111", "Sedan", "BMW")
bmw.createBMW()
let benz = new Mercedes ("V6", "Black", "55555", "Sedan","Mercedes")
benz.createMercedes()
// console.log(bmw.getAllCars())
// console.log(benz.getAllCars())
// console.log(benz.getModel())
// console.log(bmw.getModel())

console.log(bmw.cars)


// Using interface for classes
interface Person {
    name: string;
    age: number;
    drives(car: string): string;
}

class User implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    drives(car: string){
        return `${this.name} drives a ${car}`
    }

}

let user1 = new User("Solex", 42)
console.log(user1.drives("sedan"))