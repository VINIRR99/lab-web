import { User } from "./models/User";
import { App } from "./views/App";

const user = User.buildUser({ name: 'New User', age: 50 });

const root = document.getElementById('root');

if (root) {
    const app = new App(root, user);
    app.render();
} else {
    throw new Error('Root not found');
};