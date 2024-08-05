import { ApiResponse, ITipyPost } from '@/types';
import { HttpClient } from './http-client';
import { API_ENDPOINTS } from './api-endpoint';
import axios from 'axios';

class Client {
  typi = {
    all: () => {
        
      axios.get<ITipyPost[]>("https://jsonplaceholder.typicode.com/posts");
    },
  };
}

const client = new Client();
export default client;
