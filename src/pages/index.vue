<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goout = () => {
  router.push("/login");
};
</script>

<template>
  <div>后台首页 <el-button @click="goout">退出登录</el-button></div>
  <div>{{ $store.state.user }}</div>
</template>

<style scoped></style>
