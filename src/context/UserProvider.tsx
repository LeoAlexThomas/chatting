import CustomLoader from "@/components/Loader";
import { UserInterface } from "@/types/user";
import { Center } from "@mantine/core";
import { createContext, useContext } from "react";
import useSWR from "swr";

const dummyUserData: UserInterface = {
  userId: "1",
  mobile: "9080805641",
  userName: "User1",
};

const UserInfoContext = createContext<UserInterface>(dummyUserData);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error } = useSWR<UserInterface>("/user/info");
  const isLoading = !data && !error;

  if (isLoading) {
    return <CustomLoader />;
  }

  if (!data) {
    return <Center h="100vh">User not found</Center>;
  }

  return (
    <UserInfoContext.Provider value={data}>{children}</UserInfoContext.Provider>
  );
};

export default UserProvider;

export const useUserInfo = () => useContext(UserInfoContext);
