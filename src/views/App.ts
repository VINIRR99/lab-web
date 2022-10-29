import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserEdit } from "./UserEdit";
import { UserList } from "./UserList";

export class App extends View<User, UserProps> {
    regionsMap = (): { [key: string]: string } => {return {
        userEdit: '.user-edit',
        userCollection: '.user-collection'
    }};

    onRender = (): void => {
        const userEdit = new UserEdit(this.regions.userEdit, this.model);

        const users = User.buildUserCollection();

        this.model.on('save', (): void => {users.fetch()});

        userEdit.render();

        users.on('change', (): void => {
            const root = document.getElementById('root');

            if (root) {
                const userList = new UserList(this.regions.userCollection, users);
                userList.render();
            };
        });

        users.fetch();
    };

    template = (): string => `
        <div>
            <div class="user-edit">UserShow</div>
            <div class="user-collection">UserForm</div>
        </div>
    `;
};