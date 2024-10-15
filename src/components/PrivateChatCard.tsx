import { PersonChatInfoInterface } from "@/types/chat";
import { MessageTypeEnum } from "@/types/message";
import { Avatar, Group, Stack, Text } from "@mantine/core";
import isNil from "lodash/isNil";
import { IconPhoto, IconVideo } from "@tabler/icons-react";
import dayjs from "dayjs";
import { TextDecoderStream } from "stream/web";

const PersonChatCard = ({ chat }: { chat: PersonChatInfoInterface }) => {
  const user = chat.user;
  const message = chat.lastMessage;

  const renderLastMessage = () => {
    if (isNil(message)) {
      return <></>;
    }
    switch (message.type) {
      case MessageTypeEnum.image:
        return (
          <Group wrap="nowrap" gap={8}>
            <IconPhoto
              size="20px"
              color="var(--mantine-color-primary-gray-6)"
            />
            <MessageText text="Image" />
          </Group>
        );
      case MessageTypeEnum.video:
        return (
          <Group wrap="nowrap" gap={8}>
            <IconVideo
              size="20px"
              color="var(--mantine-color-primary-gray-6)"
            />
            <MessageText text="Video" />
          </Group>
        );
      default:
        return <MessageText text={message.message} />;
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
      <Text fz={12} lh="1.16" c="primary-gray.3">
        {isToday
          ? dayjs(message.messageTime).format("hh:MM A")
          : isYesterday
          ? "Yesterday"
          : dayjs(message.messageTime).format("DD/MM/YYYY")}
      </Text>
    );
  };

  return (
    <Group wrap="nowrap" gap={16} w="100%" p={4}>
      <Avatar name={user.userName} src={user.profileImage} size={50} />
      <Stack
        gap={6}
        w="100%"
        style={{
          alignSelf: "center",
        }}
      >
        <Group wrap="nowrap" justify="space-between">
          <Text fz={16} fw={700} lh="1.21" color="black">
            {user.userName}
          </Text>
          {renderMessageTime()}
        </Group>
        {renderLastMessage()}
      </Stack>
    </Group>
  );
};

const MessageText = ({ text }: { text: string }) => {
  return (
    <Text fz={14} lh="1.25" c="primary-gray.6">
      {text}
    </Text>
  );
};

export default PersonChatCard;
