<template>
  <el-main class="image-main">
    <div class="top">
      <div v-for="i in 100" :key="i">{{ i }}</div>
    </div>
    <div class="bottom">分页区域</div>
  </el-main>
</template>
<style>
.image-main {
  position: relative;
}
.image-main .top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-y: auto;
}
.image-main .bottom {
  @apply flex items-center justify-center;
  position: absolute;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
