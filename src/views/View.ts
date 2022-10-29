import { Model, HasId } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
    regions: { [key: string]: HTMLElement } = {};

    constructor(public parent: HTMLElement, public model: T) {
        this.bindModel();
    };

    abstract template(): string;

    eventsMap = (): { [key: string]: () => void } => {return {}};

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

    regionsMap = (): { [key: string]: string } => {return {}};

    mapRegions = (fragment: DocumentFragment): void => {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];

            const element = fragment.querySelector(selector) as HTMLElement | null;
            if (element) {
                this.regions[key] = element;
            };
        };
    };

    onRender = (): void => {};

    render = (): void => {
        this.parent.innerHTML = '';

        const template = document.createElement('template');
        template.innerHTML = this.template();

        this.bindEvents(template.content);
        this.mapRegions(template.content);

        this.onRender();

        this.parent.append(template.content);
    };
};