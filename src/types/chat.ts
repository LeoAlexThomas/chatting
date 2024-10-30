import { MessageInterface } from "@/types/message";
import { MiniUserInterface } from "@/types/user";

export interface PersonChatInfoInterface {
  user: MiniUserInterface;
  lastMessage?: MessageInterface;
  roomId: number;
}
