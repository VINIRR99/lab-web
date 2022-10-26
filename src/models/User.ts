import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
};

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3000/users');
    public attributes: Attributes<UserProps>;

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    };

    get on()  {return this.events.on};

    get trigger() {return this.events.trigger};

    get get() {return this.attributes.get};

    set = (update: UserProps): void => {
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