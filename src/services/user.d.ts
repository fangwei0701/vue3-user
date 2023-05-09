export interface LoginParams {
  username: string;
  password: string;
}

export interface UserOption {
  email: string;
  isLdapUser?: boolean;
  mobilephone: string;
  nickname: string;
  orgSSOID: string;
  organization: number;
  sd: string;
  sessionToken: string;
  title?: string;
  unreadMessages?: number;
  useSSO: false;
  userLogin: string;
  userRoles: UserRoleOption[];
  userStatus: number;
  paths: string[];
  failedlogins?: number;
}

export interface UserRoleOption {
  roleId: number;
  roleName: string;
  userId: number;
  userRoleId: number;
}
