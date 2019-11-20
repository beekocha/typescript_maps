import faker from 'faker';
import { Mappable } from './Map';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            //Using parseFloat to convert string into decimal
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    };
    //A content we'll use in creting marker
    markerInfo():string {
        return `User Name: ${this.name}`
    }
}