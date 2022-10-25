import axios from "axios";

// axios.post('http://localhost:3000/users', { name: 'Jacob Tate', age: 20 });
axios.get('http://localhost:3000/users/1').then(user => console.log(user.data));