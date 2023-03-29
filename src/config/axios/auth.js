import axios from "axios";

if (localStorage.getItem("data")) {
    let data = JSON.parse(localStorage.getItem("data"))
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    axios.defaults.headers.common['Content-Type'] = "application/json"
}