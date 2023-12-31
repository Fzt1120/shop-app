import { ref, reactive } from "vue";
import { logout, updatepassword } from "@/api/manager.js";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { showModal, toast } from "@/composables/util.js";

export const useRepassword = () => {
  const router = useRouter();
  const store = useStore();
  const formDrawerRef = ref(null);
  const form = reactive({
    oldpassword: "",
    password: "",
    repassword: "",
  });
  const rules = {
    oldpassword: [
      {
        required: true,
        message: "旧密码不能为空",
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        message: "新密码不能为空",
        trigger: "blur",
      },
    ],
    repassword: [
      {
        required: true,
        message: "确认密码不能为空",
        trigger: "blur",
      },
    ],
  };
  const formRef = ref(null);
  const onSubmit = () => {
    formRef.value.validate((valid) => {
      if (!valid) {
        return false;
      }
      formDrawerRef.value.showLoading();
      updatepassword(form)
        .then((res) => {
          toast("修改密码成功,请重新登录");
          store.dispatch("layout");
          router.push("/login");
        })
        .finally(() => {
          formDrawerRef.value.hideLoading();
        });
    });
  };
  return {
    formDrawerRef,
    form,
    rules,
    formRef,
    onSubmit,
  };
};

export const useLogout = () => {
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
  return {
    handleLogout,
  };
};
