import { User } from "./models/User";

// // const user = User.buildUser({ id: 9 });

// // user.on('change', (): void => {console.log(user)});

// // user.fetch();

const users = User.buildUserCollection();

users.on('change', (): void => {console.log(users)});

users.fetch();