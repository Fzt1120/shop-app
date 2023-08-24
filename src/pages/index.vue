<script setup>
import { showModal, toast } from "@/composables/util.js";
import { logout } from "@/api/manager.js";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const handleLogout = () => {
  showModal("是否要退出登录").then((res) => {
    logout().finally(() => {
      store.dispatch("logout");
      //跳转到登录页面
      router.push("/login");
      //提示退出登录成功
      toast("退出登录成功");
    });
  });
};
</script>

<template>
  <div>后台首页 {{ $store.state.user.username }}</div>
  <el-button @click="handleLogout">退出登录</el-button>
</template>

<style scoped></style>
