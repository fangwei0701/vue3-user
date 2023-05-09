import { AxiosError, AxiosRequestConfig } from "axios";
import { showFailToast, showDialog } from "vant";
import router from "@/router";
import { HttpRes } from "./request.type";

// 登录状态失效重定向
const stateToLogin = (config: AxiosRequestConfig): void => {
  const activeRoute = router.currentRoute.value;
  if (activeRoute.path.endsWith("/login")) return null;
  const { url } = config;
  if (url?.endsWith("/account/ping")) {
    router.push({ path: "/login" });
  } else {
    showDialog({
      title: "系统提示",
      message: "登录状态已过期",
      confirmButtonText: "重新登录",
    }).then(() => {
      router.push({ path: "/login" });
    });
  }
};

// 错误消息提示
let isErrorVisible = false;
const openMessage = (msg: string): void => {
  if (isErrorVisible) return null;
  isErrorVisible = true;
  showFailToast({
    message: msg,
    onClose: () => {
      setTimeout(() => {
        isErrorVisible = false;
      }, 1000);
    },
  });
};

//  异常消息处理
export const errorAction = (err: AxiosError) => {
  let { message } = err;
  if (message.includes("Network Error")) {
    message = "连接异常";
  } else if (message.includes("timeout")) {
    message = "请求超时";
  }
  openMessage(message);
};

// 响应结果处理
export const responseAction = (
  config: AxiosRequestConfig,
  res: HttpRes<any>
): void => {
  const { code } = res || {};
  if (code === "200") return null;
  switch (code) {
    case "401":
    case "40101":
      stateToLogin(config);
      break;
    default:
      openMessage(res.message);
  }
};
