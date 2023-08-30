import {router,addRoutes} from "@/router/index";
import { getToken } from "@/composables/auth.js";
import { toast, showFullLoading, hideFullLoading } from "@/composables/util.js";
import store from "./store";
let hasGetinfo = false;
//全局前置守卫
router.beforeEach(async (to, from, next) => {
  //显示loading
  showFullLoading();
  const token = getToken();
  //没有登录，就强制跳到登录页面
  if (!token && to.path != "/login") {
    toast("请先登录", "error");
    return next({ path: "/login" });
  }
  //防止重复登录
  if (token && to.path == "/login") {
    toast("请勿重复登录", "error");
    return next({ path: from.path ? from.path : "/" });
  }
  //如果用户登录了，自动获取用户信息，并存储到vuex中
  let hasNewRoutes=false
  if (token&& !hasGetinfo) {
    let { menus } = await store.dispatch("getinfo");
    hasGetinfo = true;
    //动态添加路由
    hasNewRoutes=addRoutes(menus)
  }
  //设置页面标题
  let title = (to.meta.title ? to.meta.title : "") + "-好好学习";
  document.title = title;
  hasNewRoutes?next(to.fullPath):next()
});
//全局后置守卫
router.afterEach((to, from) => {
  //隐藏loading
  hideFullLoading();
});
