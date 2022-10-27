import axios from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(public rootUrl: string, public deserialize: (json: K) => T) {};

    get on() {return this.events.on};

    get trigger() {return this.events.trigger};

    fetch = async (): Promise<void> => {
        const { data }: { data: Promise<K[]> } = await axios.get(this.rootUrl);
        (await data).forEach((value: K): void => {
            this.models.push(this.deserialize(value));
        });

        this.trigger('change');
    };
};