import { User } from "./models/User";

const jacob = new User({ name: 'Jacob Tory' });
// console.log(jacob.get('name'));
// console.log(jacob.get('age'));

jacob.set({ name: 'Jacob Tate' });
jacob.set({ age: 20 });

// console.log(jacob.get('name'));
// console.log(jacob.get('age'));

jacob.on('change', () => {console.log('Change #1')});
jacob.on('change', () => {console.log('Change #2')});
jacob.on('click', () => {console.log('Click was triggered')});

jacob.trigger('change');
jacob.trigger('click');
jacob.trigger('save');