import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "./rest/api-endpoint";
import client from "./rest";
import { ICaptcha } from "@/types";
import invoiceInstance from "./rest/invoice-client";
import axios from "axios";

const fetchPosts = async (): Promise<ICaptcha>=> {
    const response = await axios.get(
      'https://hoadondientu.gdt.gov.vn:30000/captcha'
    );
    const data = await response.data;
    return data
  };
export const useCaptcha = () => {
    const { data: res , isLoading, isFetching, error} = useQuery({
        queryKey: [API_ENDPOINTS.GET_CAPTCHA],
        queryFn: () => client.invoice.getCaptcha(),
      });
        console.log(res);
      return {
        captcha: res  || {},
        isLoading,
        error,
      };
};
