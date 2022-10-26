import { User } from "./models/User";

const user = new User({ name: 'Luigi Mario', age: 45 });

const name = user.get('name');
console.log(name);

const age = user.get('age');
console.log(age);

user.on('change', () => {console.log('User was changed!')});

user.trigger('change');