import axios from "axios"
 class AuthService {
   
    login(data){
       return axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, data)
    }

    register(data){
       return axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, data)
    }
 }

 export default new AuthService