import axios from "axios";
import { getApiUrl } from "env";
import { parseCookies } from "nookies";

export const userTokenCookiesName = "token_user";

export const getAccessToken = (option: any) => {
  const cookies = parseCookies(option && option.context);
  const token = cookies[userTokenCookiesName];
  return token;
};

const api = (url: string, config?: any, baseUrl?: string) => {
  const apiRequestOption = Object.assign({}, config);
  const apiBaseUrl = baseUrl ?? getApiUrl();

  // middleware to get access token if present
  axios.interceptors.request.use((request: any) => {
    const token = getAccessToken(config);
    if (token && !request.headers["Authorization"]) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  });

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
