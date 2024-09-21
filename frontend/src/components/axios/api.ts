import axios from "axios";

const Api = axios.create({
    baseURL:"https://66357846415f4e1a5e249821.mockapi.io",
    headers: {
        "Content-Type":"application/json"
    }
})

export default Api;