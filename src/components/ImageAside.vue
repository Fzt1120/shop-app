<script setup>
import { ref, reactive } from "vue";
import AsideList from "./AsideList.vue";
import { getImageClassList, createImageClass } from "@/api/image_class.js";
import FormDrawer from "./FormDrawer.vue";
import { toast } from "@/composables/util.js";

//加载动画
const loading = ref(false);
const list = ref([]);
const activeId = ref(0);

//分页
const currentPage = ref(1);
const total = ref(0);
const limit = ref(10);

//获取数据
const getData = (p) => {
  if (typeof p == "number") {
    currentPage.value = p;
  }
  loading.value = true;
  getImageClassList(currentPage.value)
    .then((res) => {
      total.value = res.totalCount;
      list.value = res.list;
      let item = list.value[0];
      if (item) {
        activeId.value = item.id;
      }
    })
    .finally(() => {
      loading.value = false;
    });
};
getData();

const formDrawerRef = ref(null);
const handleCreate = () => {
  formDrawerRef.value.open();
};

const form = reactive({
  name: "",
  order: 50,
});
const rules = {
  name: [
    {
      required: true,
      message: "图库分类名称不能为空",
      trigger: "blur",
    },
  ],
};
const formRef = ref(null);
const handleSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) return;
    formDrawerRef.value.showLoading();
    createImageClass(form)
      .then((res) => {
        toast("新增成功");
        getData(1);
        formDrawerRef.value.close();
      })
      .finally(() => {
        formDrawerRef.value.hideLoading();
      });
  });
};

defineExpose({
  handleCreate,
});
</script>

<template>
  <el-aside width="220px" class="image-aside" v-loading="loading">
    <div class="top">
      <AsideList
        :active="activeId == item.id"
        v-for="(item, index) in list"
        :key="index"
        >{{ item.name }}</AsideList
      >
    </div>
    <div class="bottom">
      <el-pagination
        background
        layout="prev, next"
        :total="total"
        :current-page="currentPage"
        :page-size="limit"
        @current-change="getData"
      />
    </div>
  </el-aside>
  <FormDrawer title="新增" @submit="handleSubmit" ref="formDrawerRef">
    <el-form
      :model="form"
      ref="formRef"
      :rules="rules"
      label-width="80px"
      :inline="false"
    >
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="order">
        <el-input-number
          v-model="form.order"
          :min="0"
          :max="1000"
        ></el-input-number>
      </el-form-item>
    </el-form>
  </FormDrawer>
</template>

<style>
.image-aside {
  border-bottom: 1px solid #eee;
  position: relative;
}
.image-aside .top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-y: auto;
}
.image-aside .bottom {
  @apply flex items-center justify-center;
  position: absolute;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 0;
}
.aside-list {
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
  @apply flex items-center p-3 text-gray-600 text-sm;
}
.aside-list:hover,
.active {
  @apply bg-blue-50;
}
</style>
