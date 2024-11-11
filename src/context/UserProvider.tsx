import CustomLoader from "@/components/Loader";
import { UserInterface } from "@/types/user";
import { createContext, useContext } from "react";
import useSWR from "swr";
import { useLoggedInCheck } from "./LoginCheckProvider";
import { useRouter } from "next/router";

const dummyUserData: UserInterface = {
  id: "1",
  mobile: "9080805641",
  name: "User1",
};

const UserInfoContext = createContext<UserInterface>(dummyUserData);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const path = router.asPath;
  const { isLoginChecked } = useLoggedInCheck();
  const { data, error } = useSWR<UserInterface>("/user/current");
  const isLoading = !data && !error;

  if (path.includes("/login")) {
    return <>{children}</>;
  }

  if (isLoading || !isLoginChecked) {
    return <CustomLoader />;
  }

  if (!data) {
    return <CustomLoader h="100vh" />;
  }

  return (
    <UserInfoContext.Provider value={data}>{children}</UserInfoContext.Provider>
  );
};

export default UserProvider;

export const useUserInfo = () => useContext(UserInfoContext);
