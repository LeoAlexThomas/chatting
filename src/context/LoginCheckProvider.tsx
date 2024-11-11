import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { isNil } from "lodash";
import { userTokenCookieName } from "@/api";

interface LoginCheckProps {
  isLoggedIn: boolean;
  isLoginChecked: boolean;
}

const LoginCheckContext = createContext<LoginCheckProps>({
  isLoggedIn: false,
  isLoginChecked: false,
});

const LoginCheckProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const path = router.asPath;
  const [isLoggedInChecked, setIsLoggedInChecked] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get(userTokenCookieName);
    setIsLoggedInChecked(true);
    setIsLoggedIn(!isNil(token));
    if (path.includes("/login") || !isNil(token)) {
      return;
    }

    router.replace("/login/");
  }, [path]);

  if (path.includes("/login")) {
    return <>{children}</>;
  }

  return (
    <LoginCheckContext.Provider
      value={{
        isLoggedIn,
        isLoginChecked: isLoggedInChecked,
      }}
    >
      {children}
    </LoginCheckContext.Provider>
  );
};

export const useLoggedInCheck = () => useContext(LoginCheckContext);

export default LoginCheckProvider;
