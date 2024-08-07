import { ApiResponse, ITipyPost, ICaptcha, ILoginInvoice, IAuthenticatedInvoice, IUserLoginInvoiceOptions } from '@/types';
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
