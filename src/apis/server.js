import axios from "axios";

const url = ''
const serverAPI = axios.create({
    baseURL: url
})

export default serverAPI