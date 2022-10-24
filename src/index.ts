import { User } from "./models/User";

const jacob = new User({ name: 'Jacob Tory' });
console.log(jacob.get('name'));
console.log(jacob.get('age'));

jacob.set({ name: 'Jacob Tate' });
jacob.set({ age: 20 });

console.log(jacob.get('name'));
console.log(jacob.get('age'));