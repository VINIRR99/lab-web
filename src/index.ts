import { User } from "./models/User";

const user = new User({ name: 'Luigi Mario', age: 45 });
const name = user.attributes.get('name');
console.log(name);
const age = user.attributes.get('age');
console.log(age)