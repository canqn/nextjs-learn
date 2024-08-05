// lib/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT, // Thay thế bằng URL API của bạn
  timeout: 10000, // Thời gian chờ (ms)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm Interceptors cho request nếu cần thiết
axiosInstance.interceptors.request.use(
  (config) => {
    // Xử lý trước khi gửi request (ví dụ: thêm token vào headers)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Thêm Interceptors cho response
axiosInstance.interceptors.response.use(
  (response) => {
    // Xử lý response thành công
    return response;
  },
  (error) => {
    // Xử lý response lỗi
    if (error.response) {
      // Các trường hợp status khác nhau
      switch (error.response.status) {
        case 400:
          console.error('Bad Request:', error.response.data);
          break;
        case 401:
          console.error('Unauthorized:', error.response.data);
          // Có thể điều hướng đến trang đăng nhập
          break;
        case 403:
          console.error('Forbidden:', error.response.data);
          // Có thể hiển thị thông báo không đủ quyền truy cập
          break;
        case 404:
          console.error('Not Found:', error.response.data);
          // Có thể điều hướng đến trang 404
          break;
        case 500:
          console.error('Internal Server Error:', error.response.data);
          // Hiển thị thông báo lỗi server
          break;
        default:
          console.error('Error:', error.response.data);
      }
    } else if (error.request) {
      // Xử lý lỗi khi không nhận được response
      console.error('No response received:', error.request);
    } else {
      // Xử lý lỗi khác
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await axiosInstance.get<T>(url, { params });
    console.log(url, response);
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await axiosInstance.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await axiosInstance.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await axiosInstance.delete<T>(url);
    return response.data;
  }
}
