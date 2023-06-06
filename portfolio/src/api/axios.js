import axios from "axios"

const client=axios.create({
    baseURL : "https://monie-portfolio-backend.onrender.com"
    // baseURL : "http://localhost:4000"

});

export default client;