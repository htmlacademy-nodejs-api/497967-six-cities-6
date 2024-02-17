export enum EUserType {
  Pro = 'pro',
  Standard = 'обычный',
}

export type TUser = {
  id: number;
  name: string;
  type: EUserType;
  email: string;
  password: string;
  avatar?: string;
}
