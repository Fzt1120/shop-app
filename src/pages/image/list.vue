<script setup>
import ImageAside from "@/components/ImageAside.vue";
import ImageMain from "@/components/ImageMain.vue";
const windowHeight = window.innerHeight || document.body.clientHeight;
const h = windowHeight - 64 - 44 - 40;
</script>

<template>
  <el-container class="bg-white rounded" :style="{ height: h + 'px' }">
    <el-header class="image-header">Header</el-header>
    <el-container>
      <ImageAside />
      <ImageMain />
    </el-container>
  </el-container>
</template>

<style scoped>
.image-header {
  border-bottom: 1px solid #eee;
  @apply flex items-center;
}
</style>
