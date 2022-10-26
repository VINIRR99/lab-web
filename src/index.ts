import { User } from "./models/User";
import { UserCollection } from "./models/UserCollection";

// const user = User.buildUser({ id: 9 });

// user.on('change', (): void => {console.log(user)});

// user.fetch();

const users = new UserCollection('http://localhost:3000/users');

users.on('change', (): void => {console.log(users)});

users.fetch();