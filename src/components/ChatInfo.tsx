import { Box, Center, Text } from "@mantine/core";
import WithLoader from "./WithLoader";
import { MessageInterface } from "@/types/message";
import isNil from "lodash/isNil";
import useLoadMore from "@/hooks/useLoadMore";
import api from "@/api";
import { PaginationInterface } from "@/types/common";

const ChatInfo = ({ roomId }: { roomId: number | null }) => {
  const {
    data,
    error,
    isDataInitialLoading,
    isLoadingMore,
    onLoadMore,
    showLoadMore,
  } = useLoadMore<PaginationInterface<MessageInterface>>({
    getUrl: (pageNumber: number) =>
      `/chat/messages/${roomId}?pageNumber=${pageNumber}&pageSize=10`,
  });
  if (isNil(roomId)) {
    return (
      <Center w="100%" h="100%">
        <Text>No message</Text>
      </Center>
    );
  }
  console.log(
    "Infinite Loading...",
    data,
    error,
    isDataInitialLoading,
    isLoadingMore,
    onLoadMore,
    showLoadMore
  );
  return <Box w="100%" h="100%" c="primary-gree.5"></Box>;
};

export default ChatInfo;
