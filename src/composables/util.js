import { ElNotification } from "element-plus";

export const toast = (message,type="success",dangerouslyUseHTMLString=false) => {
    ElNotification({
          message,
        type,
          dangerouslyUseHTMLString,
          duration: 3000,
        });
}