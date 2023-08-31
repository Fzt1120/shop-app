import axios from '@/axios'

export const getImageClassList = (page) => {
    return axios.get("/admin/image_class/"+page)
}


export const createImageClass = (data) => {
    return axios.post("/admin/image_class",data)
}