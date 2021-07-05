import axios from "axios";
import { domain } from "./api-rest";

//get all products
export const productAll =async(token)=>{
  const endpoint = 'products/'
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


