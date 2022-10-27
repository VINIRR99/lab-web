export class UserForm {
    constructor(public parent: HTMLElement) {};

    template = (): string => `
        <div>
            <h1>User Form</h1>
            <input />
            <button>Click Me</button>
        </div>
    `;

    onButtonClick = (): void => {console.log('Hi There')};

    onHeaderHover = (): void => {console.log('H1 was hovered!')};

    eventsMap = (): { [key: string]: () => void } => {return {
        'click:button': this.onButtonClick,
        'mouseenter:h1': this.onHeaderHover
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
        const template = document.createElement('template');
        template.innerHTML = this.template();

        this.bindEvents(template.content);

        this.parent.append(template.content);
    };
};