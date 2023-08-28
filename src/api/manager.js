import axios from '@/axios'

export const login = (username, password) => {
   return axios.post("/admin/login",{username,password})
}

export const getinfo = () => {
   return axios.post("/admin/getinfo")
}

export const logout=()=>{
   return axios.post("/admin/logout")
}

export const updatepassword=(data)=>{
   return axios.post("/admin/updatepassword",data)
}