import axios from "axios"

//https://viacep.com.br/ws/48730000/json/

//baseURL : https://viacep.com.br/ws/
//Rota: 48730000/json/
const api = axios.create({
    baseURL: " https://viacep.com.br/ws/"
})
export default api