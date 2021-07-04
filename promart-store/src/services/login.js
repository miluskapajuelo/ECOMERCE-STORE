import axios from "axios";
import { domain } from "./api-rest";

export const getToken = async (body) => {
        const endpoint = 'auth/login'
        const resp = await axios.post(`${domain}${endpoint}`,body);
        return resp
        
    }

      