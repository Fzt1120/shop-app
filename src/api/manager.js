import axios from '@/axios'

export const login = (username, password) => {
   return axios.post("/admin/login",{username,password})
}