import axios from "axios";
const base_url="https://contact-management-server-j1he.onrender.com"

 export const addContact=async(data)=>{
return await axios.post(`${base_url}/contacts`,data)
}
export const getContact=async()=>{
    return await axios.get(`${base_url}/contacts`)
}

export const deleteContact=async(id)=>{
return await axios.delete(`${base_url}/contacts/${id}`)
}

// export const getContactToEdit=async(id)=>{
//     return await axios.get(`${base_url}/contacts/${id}`)
// }