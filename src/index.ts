import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: 'Lalo Salamanca', age: 60 });

const root = document.getElementById('root') as HTMLElement;
const userForm = new UserForm(root, user);
userForm.render();