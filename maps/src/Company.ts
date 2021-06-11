import faker from 'faker';
import {Mappable} from './CustomeMap'

export class Company implements Mappable {
  companyName:string;
  catchPhrase:string;
  location:{
    lat:number,
    lng:number
  }
  color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.color = 'red';
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())
    }
  }
  markerContent():string {
    return `
    <div>
    <h1>Company name: ${this.companyName}</h1>
    <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `
  }

}