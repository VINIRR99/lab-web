import { Model, HasId } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
    abstract template(): string;
    abstract eventsMap(): { [key: string]: () => void };

    constructor(public parent: HTMLElement, public model: T) {
        this.bindModel();
    };

    bindModel = (): void => {this.model.on('change', (): void => {this.render()})};

    bindEvents = (fragment: DocumentFragment): void => {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");

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