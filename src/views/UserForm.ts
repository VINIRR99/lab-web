export class UserForm {
    constructor(public parent: HTMLElement) {};

    template = (): string => `
        <div>
            <h1>User Form</h1>
            <input />
        </div>
    `;

    render = (): void => {
        const template = document.createElement('template');
        template.innerHTML = this.template();
        this.parent.append(template.content);
    };
};