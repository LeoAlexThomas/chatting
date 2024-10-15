export interface UserInterface {
  userId: string;
  userName: string;
  mobile: string;
  userEmail?: string;
  profileImage?: string;
  isBlocked?: boolean;
  profileStatus?: string;
}

export interface MiniUserInterface {
  userId: string;
  userName: string;
  profileImage?: string;
}
