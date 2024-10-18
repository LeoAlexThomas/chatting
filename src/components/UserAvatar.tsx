import { useUserInfo } from "@/context/UserProvider";
import { Avatar, Menu, Stack, Text } from "@mantine/core";

const UserAvatar = () => {
  const userData = useUserInfo();
  return (
    <Menu width={300}>
      <Menu.Target>
        <Avatar
          name={userData.userName}
          src={userData.profileImage}
          size="md"
        />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>
          <Stack gap={8}>
            <Text>{userData.userName}</Text>
            {userData.userEmail && <Text>{userData.userEmail}</Text>}
            <Text>{userData.mobile}</Text>
          </Stack>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserAvatar;
