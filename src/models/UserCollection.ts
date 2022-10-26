import axios from "axios";
import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";

export class UserCollection {
    models: User[] = [];
    events: Eventing = new Eventing();

    constructor(public rootUrl: string) {};

    get on() {return this.events.on};

    get trigger() {return this.events.trigger};

    fetch = async (): Promise<void> => {
        const { data }: { data: Promise<UserProps[]> } = await axios.get(this.rootUrl);
        (await data).forEach((value: UserProps): void => {
            const user = User.buildUser(value);
            this.models.push(user);
        });

        this.trigger('change');
    };
};