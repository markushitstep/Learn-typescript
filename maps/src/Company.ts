import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable { // We are say, are we creating the class based on the interface correctly, if no - error
    companyName: string;
    catchPhrase: string
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'white';
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent(): string {
        return `
            <div>
                <h2>Company name: ${this.companyName}</h2>
                <h3>Company Catchphrase: ${this.catchPhrase}<h3>
            <div>
            `;
    }
}