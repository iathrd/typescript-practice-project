import {User} from './User';
import {Company} from './Company'
import {CustomeMap} from './CustomeMap'

const user = new User();
const company = new Company()
const customeMap = new CustomeMap('maps');

customeMap.addMarker(user)
customeMap.addMarker(company)