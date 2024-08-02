import { ApiResponse, ITipyPost } from '@/types'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import client from './rest'
import { API_ENDPOINTS } from './rest/api-endpoint';

export const useListPost = () => {
    const {
      data,
      isLoading,
      error,
    } = useQuery<ApiResponse<ITipyPost[]>, Error>(
      [API_ENDPOINTS.GET_ALL_TIPY_POST], // Khóa truy vấn (query key)
      client.typi.all() // Hàm truy vấn
    );
  
    return {
      posts: data?.data || [],
      isLoading,
      error,
    };
  };