import axios from "axios";
// http://localhost:8080/api/
axios.defaults.baseURL = 'http://127.0.0.1:8000/accounts/';
let refresh = false;

axios.interceptors.response.use(resp => resp,async error =>{
    if(error.response.status === 401 && !refresh){
        refresh = true;
        const {data,status} = await axios.post('refresh',{},{withCredentials: true});

        if(status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            return axios(error.config);
        }
    }

    refresh =false;
    return error;
});