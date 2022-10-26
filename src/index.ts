import { User } from "./models/User";

const user = User.buildUser({ id: 7 });

user.fetch();

user.on('change', (): void => {console.log(user)});

user.save();