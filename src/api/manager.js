import axios from '@/axios'

export const login = (username, password) => {
   return axios.post("/admin/login",{username,password})
}

export const gitinfo = () => {
   return axios.post("/admin/getinfo")
}