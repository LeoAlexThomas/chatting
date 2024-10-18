import { Center, Group, Text } from "@mantine/core";
import { IconExclamationCircle } from "@tabler/icons-react";

const ErrorMsg = ({ errorMsg }: { errorMsg: string }) => {
  return (
    <Center>
      <Group wrap="nowrap">
        <IconExclamationCircle size={12} color="primary-red.5" />
        <Text>{errorMsg}</Text>
      </Group>
    </Center>
  );
};

export default ErrorMsg;
