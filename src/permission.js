import router from '@/router/index'
import { getToken } from '@/composables/auth.js'
import { toast } from '@/composables/util.js'

router.beforeEach((to, from, next) => {
    const token=getToken()
    if (!token && to.path != "/login") {
        toast("请先登录","error")
        return next({ path:"/login"})
    }
    if (token && to.path == "/login") {
        toast("请勿重复登录", "error")
        return next({path:from.path?from.path:"/"})
    }
    next()
})