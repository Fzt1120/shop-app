import { useCookies } from "@vueuse/integrations/useCookies";
const tokenKey = "admin-token"
const cookie = useCookies()
export const getToken = () => {
   return cookie.get(tokenKey)
}
export const setToken = (token) => {
   return cookie.set(tokenKey,token)
}
export const removeToken = () => {
   return cookie.remove(tokenKey)
}