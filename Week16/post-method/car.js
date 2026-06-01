class Car {
    engineType = ""
    color= ""
    vin = ""
    #totalCars = []
    

    constructor(engineType, color, vin){
        this.engineType = engineType 
        this.color = color
        this.vin = vin
    }

    getModel() {
        return "v1"
    }

    getAllCars(){
        return this.#totalCars
    }

    get cars(){
        return this.#totalCars
    }
}


class BMW extends Car{
    constructor(engineType, color, vin, type, brand){
        super(engineType, color, vin)
        this.type = type
        this.brand = brand
    }

    createBMW(engineType, color, vin, type, brand){
       let stock = this.getAllCars()
        stock.push({
            engineType,
            color,
            vin,
            type,brand
        })

        return stock

    }

    getModel(){
        return "M5"
    }
}


class Mercedes extends Car{
    constructor(engineType, color, vin, type, brand){
        super(engineType, color, vin)
        this.type = type
        this.brand =brand
    }

    createMercedes(engineType, color, vin, type, brand){
        let stock = this.getAllCars()
        stock.push({
            engineType,
            color,
            vin,
            type,
            brand
        })

        return stock

    }

    getModel(){
        return "GLE 63"
    }
}





let bmw = new BMW ()
bmw.createBMW("V8", "Black", "11111", "Sedan", "BMW")
let benz = new Mercedes ()
benz.createMercedes("V6", "Black", "55555", "Sedan","Mercedes")
// console.log(bmw.getAllCars())
// console.log(benz.getAllCars())
// console.log(benz.getModel())
// console.log(bmw.getModel())

console.log(bmw.cars)