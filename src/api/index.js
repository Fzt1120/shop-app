import axios from '@/axios'

export const getStatistics1 = () => {
    return axios.get("/admin/statistics1")
}


export const getStatistics3 = (type) => {
    return axios.get("/admin/statistics3?type="+type)
}