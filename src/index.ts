import { User } from "./models/User";

const user = new User({ name: 'Amy Lalo', age: 27 });

user.on('save', (): void => {console.log(user)});

user.save();