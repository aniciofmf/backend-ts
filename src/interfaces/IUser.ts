export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  salt: string;
  token: string;
  lastLogin: Date;
  active: boolean;
}

export interface IUserInputDTO {
  name: string;
  email: string;
  password: string;
}
