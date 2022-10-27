import { User } from "../models/User";

export class UserForm {
    constructor(public parent: HTMLElement, public model: User) {
        this.bindModel();
    };

    bindModel = (): void => {this.model.on('change', (): void => {this.render()})};

    template = (): string => `
        <div>
            <h1>User Form</h1>
            <div>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
            </div>
            <input placeholder="Name..." />
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
        </div>
    `;

    onSetName = (): void => {
        const input = this.parent.querySelector('input');

        const name = input?.value;

        this.model.set({ name });
    };

    onSetRandomAge = (): void => {this.model.setRandomAge()};

    eventsMap = (): { [key: string]: () => void } => {return {
        'click:.set-age': this.onSetRandomAge,
        'click:.set-name': this.onSetName
    }};

    bindEvents = (fragment: DocumentFragment): void => {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        };
    };

    render = (): void => {
        this.parent.innerHTML = '';

        const template = document.createElement('template');
        template.innerHTML = this.template();

        this.bindEvents(template.content);

        this.parent.append(template.content);
    };
};