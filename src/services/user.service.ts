import http from "@/api/request";
import { UserOption, LoginParams } from "./user";

// 登录接口
const login = (params: LoginParams) => {
  return http.post<UserOption>("/account/login", params, "FORM");
};

// 退出登录
const logout = () => {
  return http.get("/account/logout");
};

export default { login, logout };
