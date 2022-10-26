interface IsObject {};

export class Attributes<T extends IsObject> {
    constructor(private data: T) {};

    get = <K extends keyof T>(key: K): T[K] => this.data[key];

    getAll = (): T => this.data;

    set = (update: T): void => {Object.assign(this.data, update)};
};