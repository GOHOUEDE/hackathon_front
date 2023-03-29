import axios from "axios"
 class AuthService {
    login(){
       return axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`)
    }
 }

 export default new AuthService