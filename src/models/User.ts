import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync"
import { Eventing } from "./Eventing"

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
};

export class User extends Model<UserProps> {
    static buildUser = (attrs: UserProps): User => new User(
        new Attributes<UserProps>(attrs),
        new Eventing(),
        new ApiSync<UserProps>('http://localhost:3000/users')
    );
};