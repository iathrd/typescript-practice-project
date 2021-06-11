import faker from 'faker';
import {Mappable} from './CustomeMap'

export class User implements Mappable {
  name:string;
  location : {
    lat:number,
    lng:number
  }
  color: string;

  constructor () {
    this.name = faker.name.firstName();
    this.color = 'red';
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())
    }
  }

  markerContent():string {
    return `
    <div>
     <h1>User name ${this.name}<h1>
    </div>
    `
  }

}