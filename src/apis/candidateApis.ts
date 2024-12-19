import axios from "axios";

const API_CLIENT = axios.create({
    baseURL:'https://60d5a2c2943aa60017768b01.mockapi.io',
    headers:{
        'Content-Type' : 'application/json'
    }
})

export default API_CLIENT