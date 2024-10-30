import { Flex, Stack } from "@mantine/core";
import PersonChatCard from "@/components/PrivateChatCard";
import { PersonChatInfoInterface } from "@/types/chat";
import { MessageTypeEnum } from "@/types/message";
import dayjs from "dayjs";

const dummyChatList: PersonChatInfoInterface[] = [
  {
    roomId: 1,
    user: {
      userId: "1",
      userName: "John",
      profileImage: "https://leoalex.in/images/leoProfileAnimated.webp",
    },
    lastMessage: {
      id: "message1",
      isDelivered: false,
      isRead: false,
      messageTime: dayjs().toISOString(),
      type: MessageTypeEnum.text,
      message: "Hai, Welcome Leo",
      isOpened: false,
      messageOwner: {
        userId: "1",
        userName: "John",
        profileImage: "https://leoalex.in/images/leoProfileAnimated.webp",
      },
    },
  },
  {
    roomId: 2,
    user: {
      userId: "2",
      userName: "John Joe",
    },
    lastMessage: {
      id: "message3",
      isDelivered: true,
      isRead: false,
      messageTime: dayjs().subtract(1, "day").toISOString(),
      type: MessageTypeEnum.image,
      image:
        "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
      isOpened: true,
      messageOwner: {
        userId: "2",
        userName: "John Joe",
      },
    },
  },
  {
    roomId: 3,
    user: {
      userId: "3",
      userName: "Dhandraj",
      profileImage: "https://leoalex.in/images/leoProfileAnimated.webp",
    },
    lastMessage: {
      id: "message2",
      isDelivered: true,
      isRead: true,
      messageTime: dayjs().subtract(1, "week").toISOString(),
      type: MessageTypeEnum.text,
      message: "Bye Leo",
      isOpened: false,
      messageOwner: {
        userId: "3",
        userName: "Dhandraj",
        profileImage: "https://leoalex.in/images/leoProfileAnimated.webp",
      },
    },
  },
  {
    roomId: 4,
    user: {
      userId: "4",
      userName: "Sam Xavier",
    },
    lastMessage: {
      id: "message4",
      isDelivered: false,
      isRead: false,
      messageTime: dayjs().subtract(5, "days").toISOString(),
      type: MessageTypeEnum.video,
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      isOpened: false,
      messageOwner: {
        userId: "4",
        userName: "Sam Xavier",
      },
    },
  },
  {
    roomId: 5,
    user: {
      userId: "5",
      userName: "Manoj Murali",
      profileImage:
        "https://scontent.fmaa3-2.fna.fbcdn.net/v/t39.30808-6/461427160_3943759319188224_3028483575215551781_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=pJ2ZCo4kmj8Q7kNvgHfMCbt&_nc_zt=23&_nc_ht=scontent.fmaa3-2.fna&_nc_gid=ALBgrH3Fw7dXaTj12zafsQ_&oh=00_AYCgNtN-B89UgFB21CjX-NYrCGoOc5aCGEaGNfVcjjojYg&oe=6713BE18",
    },
    lastMessage: {
      id: "message5",
      isDelivered: false,
      isRead: false,
      messageTime: dayjs().subtract(2, "days").toISOString(),
      type: MessageTypeEnum.text,
      message: "Hai da, Eppo v2ku varuva?",
      isOpened: true,
      messageOwner: {
        userId: "5",
        userName: "Manoj Murali",
        profileImage:
          "https://scontent.fmaa3-2.fna.fbcdn.net/v/t39.30808-6/461427160_3943759319188224_3028483575215551781_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=pJ2ZCo4kmj8Q7kNvgHfMCbt&_nc_zt=23&_nc_ht=scontent.fmaa3-2.fna&_nc_gid=ALBgrH3Fw7dXaTj12zafsQ_&oh=00_AYCgNtN-B89UgFB21CjX-NYrCGoOc5aCGEaGNfVcjjojYg&oe=6713BE18",
      },
    },
  },
  {
    roomId: 6,
    user: {
      userId: "6",
      userName: "Kishore Kumaran",
    },
    lastMessage: {
      id: "message6",
      isDelivered: true,
      isRead: false,
      messageTime: dayjs().subtract(1, "month").toISOString(),
      type: MessageTypeEnum.image,
      image:
        "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
      isOpened: false,
      messageOwner: {
        userId: "6",
        userName: "Kishore Kumaran",
      },
    },
  },
  {
    roomId: 7,
    user: {
      userId: "7",
      userName: "Sathya Narayanan",
      profileImage:
        "https://scontent.fmaa3-2.fna.fbcdn.net/v/t39.30808-1/356620157_6539115922842369_6995869315804903516_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=SItp2atBUwAQ7kNvgF1Jaiy&_nc_zt=24&_nc_ht=scontent.fmaa3-2.fna&_nc_gid=AjHi6VhyO0lpJvv6W3KUwJD&oh=00_AYDGy99Bgv9gfbCkGl12V9SSpxqF8sHiRzg1dBs93ermmw&oe=6713BCCB",
    },
    lastMessage: {
      id: "message7",
      isDelivered: true,
      isRead: true,
      messageTime: dayjs().subtract(2, "hours").toISOString(),
      type: MessageTypeEnum.text,
      message: "Dai enga iruka?",
      isOpened: false,
      messageOwner: {
        userId: "7",
        userName: "Sathya Narayanan",
        profileImage:
          "https://scontent.fmaa3-2.fna.fbcdn.net/v/t39.30808-1/356620157_6539115922842369_6995869315804903516_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=SItp2atBUwAQ7kNvgF1Jaiy&_nc_zt=24&_nc_ht=scontent.fmaa3-2.fna&_nc_gid=AjHi6VhyO0lpJvv6W3KUwJD&oh=00_AYDGy99Bgv9gfbCkGl12V9SSpxqF8sHiRzg1dBs93ermmw&oe=6713BCCB",
      },
    },
  },
  {
    roomId: 8,
    user: {
      userId: "8",
      userName: "Harish Kumar",
      profileImage:
        "https://scontent.fmaa3-3.fna.fbcdn.net/v/t39.30808-6/309835235_2423285864477576_7053737427105736517_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ovD9_LgNlFcQ7kNvgHBCQKz&_nc_zt=23&_nc_ht=scontent.fmaa3-3.fna&_nc_gid=Ama-QUObtzreuCZmC_sS6Lo&oh=00_AYDF8x2na79FEUcgZ2Mv0-xoEbzJV90w6hknHBP1-Sm36w&oe=6713D41A",
    },
    lastMessage: {
      id: "message8",
      isDelivered: true,
      isRead: false,
      messageTime: dayjs().subtract(2, "months").toISOString(),
      type: MessageTypeEnum.text,
      message: "Hai, Welcome Leo",
      isOpened: true,
      messageOwner: {
        userId: "8",
        userName: "Harish Kumar",
        profileImage:
          "https://scontent.fmaa3-3.fna.fbcdn.net/v/t39.30808-6/309835235_2423285864477576_7053737427105736517_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ovD9_LgNlFcQ7kNvgHBCQKz&_nc_zt=23&_nc_ht=scontent.fmaa3-3.fna&_nc_gid=Ama-QUObtzreuCZmC_sS6Lo&oh=00_AYDF8x2na79FEUcgZ2Mv0-xoEbzJV90w6hknHBP1-Sm36w&oe=6713D41A",
      },
    },
  },
  {
    roomId: 9,
    user: {
      userId: "9",
      userName: "Thomas Xavier",
    },
    lastMessage: {
      id: "message9",
      isDelivered: false,
      isRead: false,
      messageTime: dayjs().subtract(2, "weeks").toISOString(),
      type: MessageTypeEnum.text,
      message: "Hai, Welcome",
      isOpened: false,
      messageOwner: {
        userId: "9",
        userName: "Thomas Xavier",
      },
    },
  },
  {
    roomId: 10,
    user: {
      userId: "10",
      userName: "Kala",
    },
    lastMessage: {
      id: "message10",
      isDelivered: false,
      isRead: false,
      messageTime: dayjs().subtract(4, "days").toISOString(),
      type: MessageTypeEnum.text,
      message: "Hai, Welcome Leo",
      isOpened: false,
      messageOwner: {
        userId: "10",
        userName: "Kala",
      },
    },
  },
  {
    roomId: 11,
    user: {
      userId: "11",
      userName: "Kishore Kumaran",
    },
    lastMessage: {
      id: "message11",
      isDelivered: true,
      isRead: false,
      messageTime: dayjs().subtract(1, "month").toISOString(),
      type: MessageTypeEnum.image,
      image:
        "https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
      isOpened: false,
      messageOwner: {
        userId: "11",
        userName: "Kishore Kumaran",
      },
    },
  },
  {
    roomId: 12,
    user: {
      userId: "12",
      userName: "Sathya",
      profileImage:
        "https://scontent.fmaa3-2.fna.fbcdn.net/v/t39.30808-1/356620157_6539115922842369_6995869315804903516_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=SItp2atBUwAQ7kNvgF1Jaiy&_nc_zt=24&_nc_ht=scontent.fmaa3-2.fna&_nc_gid=AjHi6VhyO0lpJvv6W3KUwJD&oh=00_AYDGy99Bgv9gfbCkGl12V9SSpxqF8sHiRzg1dBs93ermmw&oe=6713BCCB",
    },
    lastMessage: {
      id: "message12",
      isDelivered: true,
      isRead: true,
      messageTime: dayjs().subtract(2, "hours").toISOString(),
      type: MessageTypeEnum.text,
      message: "Hello?",
      isOpened: false,
      messageOwner: {
        userId: "12",
        userName: "Sathya",
        profileImage:
          "https://scontent.fmaa3-2.fna.fbcdn.net/v/t39.30808-1/356620157_6539115922842369_6995869315804903516_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=SItp2atBUwAQ7kNvgF1Jaiy&_nc_zt=24&_nc_ht=scontent.fmaa3-2.fna&_nc_gid=AjHi6VhyO0lpJvv6W3KUwJD&oh=00_AYDGy99Bgv9gfbCkGl12V9SSpxqF8sHiRzg1dBs93ermmw&oe=6713BCCB",
      },
    },
  },
  {
    roomId: 13,
    user: {
      userId: "13",
      userName: "Harish",
      profileImage:
        "https://scontent.fmaa3-3.fna.fbcdn.net/v/t39.30808-6/309835235_2423285864477576_7053737427105736517_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ovD9_LgNlFcQ7kNvgHBCQKz&_nc_zt=23&_nc_ht=scontent.fmaa3-3.fna&_nc_gid=Ama-QUObtzreuCZmC_sS6Lo&oh=00_AYDF8x2na79FEUcgZ2Mv0-xoEbzJV90w6hknHBP1-Sm36w&oe=6713D41A",
    },
    lastMessage: {
      id: "message13",
      isDelivered: true,
      isRead: false,
      messageTime: dayjs().subtract(2, "months").toISOString(),
      type: MessageTypeEnum.text,
      message: "Hai, Welcome Leo",
      isOpened: false,
      messageOwner: {
        userId: "13",
        userName: "Harish",
        profileImage:
          "https://scontent.fmaa3-3.fna.fbcdn.net/v/t39.30808-6/309835235_2423285864477576_7053737427105736517_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ovD9_LgNlFcQ7kNvgHBCQKz&_nc_zt=23&_nc_ht=scontent.fmaa3-3.fna&_nc_gid=Ama-QUObtzreuCZmC_sS6Lo&oh=00_AYDF8x2na79FEUcgZ2Mv0-xoEbzJV90w6hknHBP1-Sm36w&oe=6713D41A",
      },
    },
  },
  {
    roomId: 14,
    user: {
      userId: "14",
      userName: "Thomas Xavier",
    },
    lastMessage: {
      id: "message14",
      isDelivered: false,
      isRead: false,
      messageTime: dayjs().subtract(2, "weeks").toISOString(),
      type: MessageTypeEnum.text,
      message: "Hai, Welcome",
      isOpened: false,
      messageOwner: {
        userId: "14",
        userName: "Thomas Xavier",
      },
    },
  },
  {
    roomId: 15,
    user: {
      userId: "15",
      userName: "Kala",
    },
    lastMessage: {
      id: "message15",
      isDelivered: false,
      isRead: false,
      messageTime: dayjs().subtract(4, "days").toISOString(),
      type: MessageTypeEnum.text,
      message: "Hai, Welcome Leo",
      isOpened: false,
      messageOwner: {
        userId: "15",
        userName: "Kala",
      },
    },
  },
];

const ChatList = ({
  searchText,
  onSelect,
}: {
  searchText: string;
  onSelect: (val: number) => void;
}) => {
  return (
    <Stack
      gap={8}
      h="100%"
      style={{
        overflow: "auto",
      }}
    >
      {dummyChatList.map((chat) => {
        return (
          <Flex
            w="100%"
            key={chat.user.userId}
            onClick={() => onSelect(chat.roomId)}
          >
            <PersonChatCard chat={chat} />
          </Flex>
        );
      })}
      {/* <WithLoader apiUrl={`/chat/recent/?searchText=${searchText}`}>
        {({ data }: { data: PersonChatInfoInterface[] }) => {
          return (
            <>
              {data.map((chat) => {
                return (
                  <Fragment key={chat.user.userId}>
                    <PersonChatCard chat={chat} />
                  </Fragment>
                );
              })}
            </>
          );
        }}
      </WithLoader> */}
    </Stack>
  );
};

export default ChatList;
