import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
};

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser = (attrs: UserProps): User => new User(
        new Attributes<UserProps>(attrs),
        new Eventing(),
        new ApiSync<UserProps>(rootUrl)
    );

    static buildUserCollection = (): Collection<User, UserProps> => new Collection<User, UserProps>(
        rootUrl,
        User.buildUser
    );
};