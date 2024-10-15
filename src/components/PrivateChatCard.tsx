import { PersonChatInfoInterface } from "@/types/chat";
import { MessageTypeEnum } from "@/types/message";
import { Avatar, Group, Stack, Text } from "@mantine/core";
import isNil from "lodash/isNil";
import { IconPhoto, IconVideo } from "@tabler/icons-react";
import dayjs from "dayjs";

const PersonChatCard = ({ chat }: { chat: PersonChatInfoInterface }) => {
  const user = chat.user;
  const message = chat.lastMessage;

  const renderLastMessage = () => {
    if (isNil(message)) {
      return <></>;
    }
    switch (message.type) {
      case MessageTypeEnum.image:
        return <IconPhoto size="20px" />;
      case MessageTypeEnum.video:
        return <IconVideo size="20px" />;
      default:
        return <Text>{message.message}</Text>;
    }
  };

  const renderMessageTime = () => {
    if (isNil(message)) {
      return;
    }
    const isToday = dayjs().isSame(dayjs(message.messageTime), "date");
    const isYesterday = dayjs()
      .subtract(1, "day")
      .isSame(dayjs(message.messageTime), "date");
    return (
      <Text>
        {isToday
          ? dayjs(message.messageTime).format("hh:MM A")
          : isYesterday
          ? "Yesterday"
          : dayjs(message.messageTime).format("DD/MM/YYYY")}
      </Text>
    );
  };

  return (
    <Group gap={16} w="100%" bg="blue">
      <Avatar name={user.userName} src={user.profileImage} size="lg" />
      <Stack
        gap={10}
        bg="red"
        style={{
          alignSelf: "stretch",
        }}
      >
        <Group wrap="nowrap" justify="space-between">
          <Text>{user.userName}</Text>
          {renderMessageTime()}
        </Group>
        {renderLastMessage()}
      </Stack>
    </Group>
  );
};

export default PersonChatCard;
