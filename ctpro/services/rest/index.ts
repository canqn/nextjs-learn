import { ApiResponse, ITipyPost } from "@/types";
import { HttpClient } from "./http-client";
import { API_ENDPOINTS } from "./api-endpoint";

class Client{
 typi = {
    all: ()=>{
        HttpClient.get<ApiResponse<ITipyPost[]>>(
            API_ENDPOINTS.GET_ALL_TIPY_POST
        )
        }
    }
}

const client = new Client();
export default client;