import { Box, Center, Text } from "@mantine/core";
import WithLoader from "./WithLoader";
import { MessageInterface } from "@/types/message";
import isNil from "lodash/isNil";

const ChatInfo = ({ roomId }: { roomId: number | null }) => {
  if (isNil(roomId)) {
    return (
      <Center w="100%" h="100%">
        <Text>No message</Text>
      </Center>
    );
  }
  return (
    <Box w="100%" h="100%" c="primary-gree.5">
      <WithLoader apiUrl={`/chat/message/${roomId}`}>
        {({ data }: { data: MessageInterface }) => <>{data.type}</>}
      </WithLoader>
    </Box>
  );
};

export default ChatInfo;
