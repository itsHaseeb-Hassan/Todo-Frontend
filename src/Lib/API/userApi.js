import { callPrivateApi } from "../Apiendpoint";
import { toast } from "react-toastify";


export const loginUser=async (data)=>{
  console.log("data in loginUser",data)
  try {
    const response= await callPrivateApi("/users/login","POST",data)
    console.log("response in loginUser",response)
    if(response.status === 200 && response.isverified === true){
        toast.success(response.message)
        return response
    }
    else{
        toast.error(response.message)
    }
  } catch (error) {
      const err = error
      toast.error(err)

  }
 
}

export const createUser = async (data) => {
  console.log("data in createUser", data)
  try {
      const response = await callPrivateApi("/users/register", "POST", data)
      console.log("response in createUser", response)
      if(response.status === 200){
          toast.success(response.message)
          return response
      }
      else{
          toast.error(response.message)
      }
  } catch (error) {
      const err = error
      toast.error(err)
  }
}

