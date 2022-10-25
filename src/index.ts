import { User } from "./models/User";

const jacob = new User({ id: 1 });

jacob.fetch();

console.log(jacob)