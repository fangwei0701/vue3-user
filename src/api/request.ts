import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";
import { errorAction, responseAction } from "./action";
import { HttpRes } from "./request.type";

enum CONTENT_TYPE {
  JSON = "application/json; charset=utf-8",
  FORM = "application/x-www-form-urlencoded; charset=utf-8",
  "FORM_DATA" = "multipart/form-data",
}

// 创建请求实例
const instance = axios.create({
  baseURL: "/c4c3",
  timeout: 1000, // 指定请求超时的毫秒数
  withCredentials: false, // 表示跨域请求时是否需要使用凭证
});

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { config, data } = response;
    if (data && !checkIsBinary(data)) {
      responseAction(config, data);
    }
    return Promise.resolve(response);
  },
  (error: AxiosError) => {
    errorAction(error);
    Promise.reject(error);
  }
);

const request = <T>(
  url: string,
  params = {},
  method = "get",
  contentType: "JSON" | "FORM" | "FORM_DATA" = "JSON",
  options: AxiosRequestConfig = {}
): Promise<T> => {
  return new Promise((resolve, reject) => {
    const axiosOption: AxiosRequestConfig = { url, method, ...options };
    method === "get"
      ? (axiosOption.params = params)
      : (axiosOption.data = params);
    const _headers = { "Content-Type": getContentType(contentType) };
    axiosOption.headers = axiosOption.headers
      ? { ...axiosOption.headers, ..._headers }
      : _headers;
    instance(axiosOption)
      .then((res) => resolve(checkIsBinary(res.data) ? res : res.data))
      .catch((err) => reject(err));
  });
};

const get = <T>(url: string, params = {}): Promise<HttpRes<T>> => {
  return request<HttpRes<T>>(url, params);
};

const post = <T>(
  url: string,
  params = {},
  contentType: "JSON" | "FORM" | "FORM_DATA" = "JSON",
  option: AxiosRequestConfig = {}
): Promise<HttpRes<T>> => {
  if (contentType === "FORM") params = qs.stringify(params);
  return request<HttpRes<T>>(url, params, "post", contentType, option);
};

const download = (
  url: string,
  method = "get",
  params = {},
  contentType: "JSON" | "FORM" | "FORM_DATA" = "JSON",
  option: AxiosRequestConfig = {}
) => {
  option = { responseType: "blob", ...option };
  if (contentType === "FORM") params = qs.stringify(params);
  return request(url, params, method, contentType, option);
};

// 检测数据是不是二进制流（针对下载文件）
const checkIsBinary = (data: any): boolean => {
  return data instanceof Blob || data instanceof ArrayBuffer;
};

const getContentType = (type: "JSON" | "FORM" | "FORM_DATA" = "JSON") => {
  return CONTENT_TYPE[type];
};

export default { get, post, download };
