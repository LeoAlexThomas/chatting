import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getApiUrl } from "env";
import { parseCookies } from "nookies";
import { UserInterface } from "@/types/user";
import { MessageInterface, MessageTypeEnum } from "./types/message";
import dayjs from "dayjs";

export const userTokenCookiesName = "token_user";

const dummyUser: UserInterface = {
  userId: "1",
  userName: "Leo Alex Thomas",
  mobile: "9080805641",
  profileImage: "https://leoalex.in/images/leoProfileAnimated.webp",
  profileStatus: "Hi, there I'm using whatsapp",
  userEmail: "leoalex960@gmail.com",
};

const dummyMessages: MessageInterface[] = [
  {
    id: "1",
    type: MessageTypeEnum.text,
    messageTime: dayjs().subtract(1, "week").toISOString(),
    isRead: true,
    isDelivered: true,
    isOpened: true,
    message: "Hai, Hello world",
    messageOwner: {
      userId: "2",
      userName: "John Joe",
    },
  },
  {
    id: "2",
    type: MessageTypeEnum.image,
    messageTime: dayjs().subtract(3, "days").toISOString(),
    isRead: false,
    isDelivered: true,
    isOpened: false,
    image: "https://leoalex.in/images/leoProfileAnimated.webp",
    messageOwner: {
      userId: "2",
      userName: "John Joe",
    },
  },
  {
    id: "3",
    type: MessageTypeEnum.video,
    messageTime: dayjs().subtract(1, "week").toISOString(),
    isRead: false,
    isDelivered: false,
    isOpened: false,
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    messageOwner: {
      userId: "2",
      userName: "John Joe",
    },
  },
];

export const getAccessToken = () => {
  const cookies = parseCookies();
  const token = cookies[userTokenCookiesName];
  return token;
};

const api = (url: string, config?: any, baseUrl?: string) => {
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
  // if (url === "/user/info") {
  //   return dummyUser;
  // }

  // if (url.includes("chat/message/")) {
  //   return {
  //     data: dummyMessages,
  //     currentPageNumber: 1,
  //     currentPageSize: dummyMessages.length,
  //     totalPages: 1,
  //     totalSize: dummyMessages.length,
  //   };
  // }

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
