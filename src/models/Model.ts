interface ModelAtrributes<T> {
    get<K extends keyof T>(key: K): T[K];
    getAll(): T;
    set(value: T): void;
};

interface Sync<T> {
    fetch(id: number): Promise<T>;
    save(data: T): Promise<T>;
};

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
};

export interface HasId { id?: number };

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAtrributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {};

    on = this.events.on;
    trigger = this.events.trigger;
    get = this.attributes.get;

    set = (update: T): void => {
        this.attributes.set(update);
        this.events.trigger('change');
    };

    fetch = async (): Promise<void> => {
        const id = this.attributes.get('id');

        if (!id) throw new Error('Cannot fetch without an id');

        const data = await this.sync.fetch(id);
        this.set(data);
    };

    save = async (): Promise<void> => {
        try {
            await this.sync.save(this.attributes.getAll());
            this.trigger('save');
        } catch (error) {
            console.error(error);
            this.trigger('error');
        };
    };
};