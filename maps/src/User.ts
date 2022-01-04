import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable { // We are say, are we creating the class based on the interface correctly, if no - error
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'black';
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent(): string {
        return `User name: ${this.name}`;
    }
}
