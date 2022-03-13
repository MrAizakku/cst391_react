import axios from 'axios'; //npm install axios --save

export default axios.create({
    baseURL: 'http://localhost:3009'
});
