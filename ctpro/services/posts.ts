import { ApiResponse, ITipyPost } from '@/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import client from './rest';
import { API_ENDPOINTS } from './rest/api-endpoint';
import axios from 'axios';
type Post = {
  id: number;
  title: string;
  body: string;
};
const fetchPosts = async (limit = 10): Promise<Array<Post>> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = await response.data;
  return data.filter((x: Post) => x.id <= limit);
};
export const useListPost = (limit: number) => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: [API_ENDPOINTS.GET_ALL_TIPY_POST],
    queryFn: () => fetchPosts(),
  });

  return { data, isPending, isFetching };
};
