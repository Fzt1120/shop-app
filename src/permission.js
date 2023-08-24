import router from '@/router/index'
import { getToken } from '@/composables/auth.js'
import { toast } from '@/composables/util.js'
import store from './store'

router.beforeEach(async(to, from, next) => {
    const token = getToken()
    //没有登录，就强制跳到登录页面
    if (!token && to.path != "/login") {
        toast("请先登录","error")
        return next({ path:"/login"})
    }
    //防止重复登录
    if (token && to.path == "/login") {
        toast("请勿重复登录", "error")
        return next({path:from.path?from.path:"/"})
    }
    //如果用户登录了，自动获取用户信息，并存储到vuex中
    if (token) {
        await store.dispatch("getinfo")
    }
    next()
})

// gitinfo().then((res2) => {
//           store.commit("SET_USERINFO", res2);
//           console.log("res2", res2);
//         });