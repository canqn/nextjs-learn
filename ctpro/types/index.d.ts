interface ITipyPost {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export type ApiResponse<T> = {
  success: string;
  data: T;
  message: string;
  pagination: 3;
};

export interface ICaptcha {
  content: string;
  key: string;
};

export interface IInvoiceProfile {
  id: string;
  username: string;
  name: string;
  password: string;
}

export interface IAuthenticatedInvoice {
  token: string;
}

export interface IUserLoginInvoiceOptions {
  username: string;
  password: string;
  cvalue: string;
  ckey: string;
}