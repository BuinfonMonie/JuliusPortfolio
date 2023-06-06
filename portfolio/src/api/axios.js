import axios from "axios"

const client=axios.create({
    baseURL : "https://monie-portfolio-backend.onrender.com"

});

export default client;