
import axios from "axios";

const USER_BASE_REST_API_URL="http://localhost:9090/user" 

const ITEMS_BASE_REST_API_URL="http://localhost:9090/item"



export const registerUser = (userData) => {
    console.log("Called registerUser in API Service")
  return axios.post(USER_BASE_REST_API_URL+"/register",userData)
 
}

export const getAllItems= () => {
    console.log("Called  getAllItems in API Service")
  return axios.get(ITEMS_BASE_REST_API_URL+"/getallitems")
 
}

export const addItems= (itemData) => {
    console.log("Called  addItems in API Service")
     return axios.post(ITEMS_BASE_REST_API_URL+"/additem",itemData)
 
}
export const deleteItemByItemId= (itemId) => {
    console.log("Called  deleteItemByItemId in API Service")
    console.log("URL",ITEMS_BASE_REST_API_URL+"/delteitem/"+itemId)

     return axios.delete(ITEMS_BASE_REST_API_URL+"/delteitem/"+itemId)
 
}

export const updateItems = (items, itemId) => {
  return axios.put(ITEMS_BASE_REST_API_URL + "/updateitem" +itemId, items);
};

export const validateUser = (loginInput) => {
  return axios.post(USER_BASE_REST_API_URL + "/validate",loginInput);
};

