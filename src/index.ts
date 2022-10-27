import { UserForm } from "./views/UserForm";

const root = document.getElementById('root') as HTMLElement;
const userForm = new UserForm(root);
userForm.render();