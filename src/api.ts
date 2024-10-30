import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getApiUrl } from "env";
import { parseCookies } from "nookies";
import { UserInterface } from "@/types/user";

export const userTokenCookiesName = "token_user";

const dummyUser: UserInterface = {
  userId: "1",
  userName: "Leo Alex Thomas",
  mobile: "9080805641",
  profileImage: "https://leoalex.in/images/leoProfileAnimated.webp",
  profileStatus: "Hi, there I'm using whatsapp",
  userEmail: "leoalex960@gmail.com",
};

export const getAccessToken = () => {
  const cookies = parseCookies();
  const token = cookies[userTokenCookiesName];
  return token;
};

const api = (url: string, config?: AxiosRequestConfig, baseUrl?: string) => {
  const apiRequestOption = Object.assign({}, config);
  const apiBaseUrl = baseUrl ?? getApiUrl();

  // middleware to get access token if present
  axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token && !request.headers["Authorization"]) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  });
  if (url === "/user/info") {
    return dummyUser;
  }

  return axios({
    url: apiBaseUrl + url,
    ...apiRequestOption,
    transformRequest: (res: any, requestHeader: Record<string, any>) => {
      if (!Boolean(res)) {
        return null;
      }
      if (requestHeader["content-type"].startsWith("application/json")) {
        return JSON.parse(res);
      }
      return res;
    },
  }).then((res: any) => {
    return res.data;
  });
};

export default api;
