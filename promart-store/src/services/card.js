import axios from "axios";
import { domain } from "./api-rest";

//new card (some products)
export const postCart =async(token, id, productList)=>{
    const endpoint = 'carts'
    const resp = await axios({
      method: "POST",
      url: `${domain}${endpoint}`,
      headers: {
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}`
      },
      data:{
        userId:id,
        date:new Date(),
        products:productList
      }
    })
    return resp
  
  }