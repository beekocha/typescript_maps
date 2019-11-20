import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    };

    markerInfo() : string {
        return `
            <div>
                <h2>Company Name: ${this.companyName}</h2>
                <h3>Catchphrase: ${this.catchPhrase}</h3>
            </div>
        `
    }
}