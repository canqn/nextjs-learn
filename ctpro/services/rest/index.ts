import { ApiResponse, ITipyPost, ICaptcha } from '@/types';
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

    login: () => {},
  };
}

const client = new Client();
export default client;
