import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit"; 

const user = User.buildUser({ name: 'Lalo Salamanca', age: 60 });

const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();
} else {
    throw new Error('Root Element not found');
};