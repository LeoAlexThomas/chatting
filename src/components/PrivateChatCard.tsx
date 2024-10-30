import { PersonChatInfoInterface } from "@/types/chat";
import { MessageTypeEnum } from "@/types/message";
import { Avatar, Group, Stack, Text } from "@mantine/core";
import isNil from "lodash/isNil";
import {
  IconPhoto,
  IconVideo,
  IconCheck,
  IconChecks,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { useHover } from "@mantine/hooks";

const PersonChatCard = ({ chat }: { chat: PersonChatInfoInterface }) => {
  const user = chat.user;
  const message = chat.lastMessage;
  const { hovered, ref: isHoveredRef } = useHover();

  const renderLastMessage = () => {
    if (isNil(message)) {
      return <></>;
    }
    switch (message.type) {
      case MessageTypeEnum.image:
        return (
          <Group wrap="nowrap" gap={8}>
            <MessageCheck
              showNotificationCheck={message.isDelivered}
              showReadCheck={message.isRead}
            />

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
            <MessageCheck
              showNotificationCheck={message.isDelivered}
              showReadCheck={message.isRead}
            />

            <IconVideo
              size="20px"
              color="var(--mantine-color-primary-gray-6)"
            />
            <MessageText text="Video" />
          </Group>
        );
      default:
        return (
          <Group wrap="nowrap" gap={8}>
            <MessageCheck
              showNotificationCheck={message.isDelivered}
              showReadCheck={message.isRead}
            />
            <MessageText text={message.message} />
          </Group>
        );
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
    <Group
      ref={isHoveredRef}
      wrap="nowrap"
      gap={16}
      w="100%"
      p={8}
      bg={
        hovered
          ? "primary-gray.2"
          : message?.isOpened === true
          ? "transparent"
          : "primary-gray.1"
      }
      style={{
        borderRadius: 12,
        cursor: "pointer",
      }}
    >
      <Avatar
        name={user.userName}
        src={user.profileImage}
        size={50}
        style={{
          boxShadow: "0px 0px 10px #00000050",
        }}
      />
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

const MessageCheck = ({
  showNotificationCheck,
  showReadCheck,
}: {
  showNotificationCheck: boolean;
  showReadCheck: boolean;
}) => {
  if (showNotificationCheck) {
    return (
      <IconChecks
        size={20}
        color={
          showReadCheck
            ? "var(--mantine-color-primary-blue-5)"
            : "var(--mantine-color-primary-gray-3)"
        }
      />
    );
  }

  return <IconCheck size={20} color="var(--mantine-color-primary-gray-3)" />;
};

export default PersonChatCard;
