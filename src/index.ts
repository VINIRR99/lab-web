import axios from "axios";
import { User } from "./models/User";

// axios.post('http://localhost:3000/users', { name: 'Jacob Tate', age: 20 });
// axios.delete('http://localhost:3000/users/2');

const user = new User({ name: 'Mario Battali', age: 50 });
user.save();