import { useUserInfo } from "@/context/UserProvider";
import { Avatar, Popover, Stack, Text } from "@mantine/core";

const UserAvatar = () => {
  const userData = useUserInfo();
  return (
    <Popover width={300} withArrow position="bottom-end">
      <Popover.Target>
        <Avatar
          name={userData.userName}
          src={userData.profileImage}
          size="md"
        />
      </Popover.Target>
      <Popover.Dropdown maw={200}>
        <Stack gap={2}>
          <Text fz={16} fw={500}>
            {userData.userName}
          </Text>
          {userData.userEmail && (
            <Text fz={12} c="primary-gray.3">
              {userData.userEmail}
            </Text>
          )}
          <Text fz={12} c="primary-gray.3">
            {userData.mobile}
          </Text>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default UserAvatar;
