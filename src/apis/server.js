import axios from "axios";

const url = 'http://localhost:3004/items'
const serverAPI = axios.create({
    baseURL: url
})

export default serverAPI