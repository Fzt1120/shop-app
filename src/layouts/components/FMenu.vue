<script setup>
import { useRouter, useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const route = useRoute();
const defaultActive = ref(route.path);

const asideMenus = computed(() => store.state.menus);
const handleSelect = (e) => {
  router.push(e);
};
const isCollapse = computed(() => !(store.state.asideWidth == "250px"));
</script>

<template>
  <div class="f-menu" :style="{ width: $store.state.asideWidth }">
    <el-menu
      :default-active="defaultActive"
      :collapse="isCollapse"
      :collapse-transition="false"
      unique-opened
      default-active="2"
      class="border-0"
      @select="handleSelect"
    >
      <template v-for="(item, index) in asideMenus" :key="index">
        <el-sub-menu
          v-if="item.child && item.child.length > 0"
          :index="item.name"
        >
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(item2, index2) in item.child"
            :index="item2.frontpath"
          >
            <el-icon>
              <component :is="item2.icon"></component>
            </el-icon>
            <span>{{ item2.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.frontpath">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<style>
.f-menu {
  top: 64px;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  @apply shadow fixed bg-light-50;
}
.f-menu::-webkit-scrollbar {
  width: 0px;
}
</style>
