import axios from "axios";
import { domain } from "./api-rest";

//get all categories
export const categoryAll =async(token)=>{
    const endpoint = 'products/categories'
    const resp = await axios({
      method: "GET",
      url: `${domain}${endpoint}`,
      headers: {
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
      }
    })
    return resp.data
  
  }