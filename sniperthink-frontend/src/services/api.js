import axios from "axios"

const api = axios.create({
 baseURL: "https://sniperthink-dln2.onrender.com/api"
})

export default api
