import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends View<User, UserProps> {
    regionsMap = (): { [key: string]: string } => {return {
        userShow: '.user-show',
        userForm: '.user-form'
    }};

    onRender = (): void => {
        const userShow = new UserShow(this.regions.userShow, this.model);
        userShow.render();

        const userForm = new UserForm(this.regions.userForm, this.model);
        userForm.render();
    };

    template = (): string => `
        <div>
            <div class="user-show">UserShow</div>
            <div class="user-form">UserForm</div>
        </div>
    `;
};