import axios from 'axios'
import { api } from '../urlconfig'

const axiosInstant = axios.create({
    baseURL:api,
    // headers:{
    //     'Authorization':""
    // }
})

export default axiosInstant