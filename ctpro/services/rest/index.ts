import { ApiResponse, ITipyPost, ICaptcha, ILoginInvoice, IAuthenticatedInvoice, IUserLoginInvoiceOptions, IAuthenticatedUser, UserLoginOptions, UserQueryOptions, IUser, IUserProfile, UserChangePasswordOptions, UserRegisterOptions, UserRefreshTokenOptions } from '@/types';
import { HttpClient } from './http-client';
import { API_ENDPOINTS } from './api-endpoint';
import axios from 'axios';
import { InvoiceClient } from './invoice-client';

class Client {
  typi = {
    all: () => {
      axios.get<ITipyPost[]>('https://jsonplaceholder.typicode.com/posts');
    },
  };

 users ={
  all: (params: UserQueryOptions) =>
    HttpClient.get<ApiResponse<IUser[]>>(API_ENDPOINTS.USER_GET_ALL, params),
  me: (id: string) =>
    HttpClient.get<ApiResponse<IUserProfile>>(
      API_ENDPOINTS.USER_GET_ME + "/" + id
    ),
  update: (options: Partial<IUserProfile> & { id: string }) =>
    HttpClient.put<ApiResponse<IUserProfile>>(
      API_ENDPOINTS.USER_UPDATE_ME + "/" + options.id,
      options
    ),
  login: (options: UserLoginOptions) =>
    HttpClient.post<ApiResponse<IAuthenticatedUser>>(
      API_ENDPOINTS.USER_LOGIN,
      options
    ),
  changePassword: (options: UserChangePasswordOptions) =>
    HttpClient.post<ApiResponse<any>>(
      API_ENDPOINTS.USER_RESET_PASSWORD,
      options
    ),
  register: (options: UserRegisterOptions) =>
    HttpClient.post<ApiResponse<IAuthenticatedUser>>(
      API_ENDPOINTS.USER_REGISTER,
      options
    ),

  sendOTP: (options: { email: string }) =>
    HttpClient.post<ApiResponse<any>>(
      API_ENDPOINTS.USER_SEND_VERIFY_CODE,
      options
    ),

  verify: (options: {
    email: string;
    code_verify: string;
    reset_password?: boolean;
  }) =>
    HttpClient.post<
      ApiResponse<IAuthenticatedUser & { code_reset_password: string }>
    >(API_ENDPOINTS.USER_VERIFY_CODE, options),
  logout: () => HttpClient.post(API_ENDPOINTS.USER_LOGOUT, {}),
  refreshToken: (options: UserRefreshTokenOptions) =>
    HttpClient.post<ApiResponse<IAuthenticatedUser>>(
      API_ENDPOINTS.USER_REFRESH_TOKEN,
      options
    ),
 }

  invoice = {
    getCaptcha: async () => {
      const res = await InvoiceClient.get<ICaptcha>(API_ENDPOINTS.GET_CAPTCHA);
      return res; // Trả về kết quả từ InvoiceClient.get
    },

    login: async(options: IUserLoginInvoiceOptions) => {
      const data = await InvoiceClient.post<ILoginInvoice>(API_ENDPOINTS.LOGIN_INVOICE, {
        options
      })
      return data;
    },
    loginUser: async (options: IUserLoginInvoiceOptions)=> {
      const response = await InvoiceClient.post(API_ENDPOINTS.LOGIN_INVOICE, options);
      return response;
    }
  };
}

const client = new Client();
export default client;
