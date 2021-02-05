import { RequestConfig } from "./index.d";
import { message } from "antd";
import qs from "query-string";

const codeMessage: {
  [code: string]: string;
} = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

export const request: RequestConfig = {
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        errorMessage: resData.msg,
      };
    },
  },
  middlewares: [],
  requestInterceptors: [
    (url, options) => {
      const tokenInfo = JSON.parse(localStorage.getItem("TOKEN_INFO") || "{}");
      if (tokenInfo && tokenInfo.accessToken) {
        options.headers = {
          Authorization: tokenInfo.accessToken,
        };
      }
      if (
        options.method === "get" &&
        options.data &&
        Object.keys(options.data).length
      ) {
        return {
          url: `${url}?${qs.stringify(options.data)}`,
          options: {
            ...options,
            headers: {
              ...options.headers,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        };
      }
      return {
        url,
        options,
      };
    },
  ],
  responseInterceptors: [
    async (response) => {
      const res = await response.clone().json();
      if (response.status >= 200 && response.status < 300) {
        // 200的error处理
        if (!res.success) {
          if (res.code === -1) {
            message.error("系统内部未知错误", 2);
          } else {
            if (res.msg) {
              message.error(res.msg, 2);
            }
          }
        }
        return res;
      } else {
        if (response.status === 401) {
          setTimeout(() => {
            window.location.replace("/login");
          }, 1500);
        }

        message.error(res.msg || codeMessage[response.status], 2);
      }
      return res;
    },
  ],
};
