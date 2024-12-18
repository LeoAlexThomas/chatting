import { userTokenCookieName } from "@/api";
import Cookies from "js-cookie";

export const setUserToken = (token: string) => {
  Cookies.set(userTokenCookieName, token);
};

export const logout = () => {
  Cookies.remove(userTokenCookieName);
};
