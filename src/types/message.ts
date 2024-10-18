export enum MessageTypeEnum {
  text = "text",
  video = "video",
  image = "image",
}

interface CommonMessageInterface {
  id: string;
  messageTime: string;
  isRead: boolean;
  isDelivered: boolean;
  isOpened: boolean;
}

export interface TextMessageInterface extends CommonMessageInterface {
  message: string;
  type: MessageTypeEnum.text;
}

export interface ImageMessageInterface extends CommonMessageInterface {
  image: string;
  type: MessageTypeEnum.image;
}
export interface VideoMessageInterface extends CommonMessageInterface {
  video: string;
  type: MessageTypeEnum.video;
}

export type MessageInterface =
  | TextMessageInterface
  | ImageMessageInterface
  | VideoMessageInterface;
