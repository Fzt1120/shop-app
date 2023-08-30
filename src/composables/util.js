import { ElNotification,ElMessageBox } from "element-plus";
import nprogress from 'nprogress'

export const toast = (message,type="success",dangerouslyUseHTMLString=false) => {
    ElNotification({
          message,
          type,
          dangerouslyUseHTMLString,
          duration: 3000,
        });
}

// 显示全屏loading
export const showFullLoading=()=>{
  nprogress.start()
}

// 隐藏全屏loading
export const hideFullLoading=()=>{
  nprogress.done()
}

export const showModal = (content="提示内容",type="warning",title="") => {
   return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: type,
    }
  )
}