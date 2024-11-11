import { useUserInfo } from "@/context/UserProvider";
import { Avatar, Menu, Stack, Text } from "@mantine/core";
import { logout } from "./utils";
import { useRouter } from "next/router";

const UserAvatar = () => {
  const userData = useUserInfo();
  const router = useRouter();
  return (
    <Menu width={300} withArrow position="bottom-end">
      <Menu.Target>
        <Avatar name={userData.name} src={userData.profileImage} size="md" />
      </Menu.Target>
      <Menu.Dropdown maw={200}>
        <Menu.Item>
          <Stack gap={2}>
            <Text fz={16} fw={500}>
              {userData.name}
            </Text>
            {userData.email && (
              <Text fz={12} c="primary-gray.3">
                {userData.email}
              </Text>
            )}
            <Text fz={12} c="primary-gray.3">
              {userData.mobile}
            </Text>
          </Stack>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            logout();
            router.reload();
          }}
        >
          <Text fz={16} fw={700} c="black">
            Log out
          </Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserAvatar;
