import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
    template = (): string => `
        <div>
            <input placeholder="${this.model.get('name')}" />
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save User</button>
        </div>
    `;

    onSetName = (): void => {
        const input = this.parent.querySelector('input');

        if (input) {
            const name = input.value;

            this.model.set({ name });
        };
    };

    onSetRandomAge = (): void => {this.model.setRandomAge()};

    onSaveModel = (): void => {this.model.save()};

    eventsMap = (): { [key: string]: () => void } => {return {
        'click:.set-age': this.onSetRandomAge,
        'click:.set-name': this.onSetName,
        'click:.save-model': this.onSaveModel
    }};
};