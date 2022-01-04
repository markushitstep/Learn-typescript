// public method is default 
class Vehicle {
    // public drive(): void {
    //     console.log(`Im driving!`);
    // }
    // color: string;
    // constructor(color: string) {
    //     this.color = color;
    // }
    constructor(public color: string) { }
    public stop(): void {
        console.log(`Im stopped!`);
    }
    protected beep(): void {
        console.log('Beeeeep!');
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log(`Im a car and Im driving!`);
    }
    startDrivingProcess(): void {
        this.drive();
        this.beep();
    }
}

const vehicle = new Vehicle('black');
console.log(vehicle.color);
//vehicle.drive();
// vehicle.stop();

const car = new Car(4,'silver');
// car.startDrivingProcess();
// car.stop();