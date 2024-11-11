export interface UserInterface {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  profileImage?: string;
  isBlocked?: boolean;
  profileStatus?: string;
}

export interface MiniUserInterface {
  userId: string;
  userName: string;
  profileImage?: string;
}
