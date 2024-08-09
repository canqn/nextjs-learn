"use client"
import { useMutation, UseMutationResult, useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './rest/api-endpoint';
import client from './rest';
import { IAuthenticatedInvoice, ICaptcha, IUserLoginInvoiceOptions } from '@/types';
import Cookies from 'js-cookie'
import invoiceInstance from './rest/invoice-client';
import axios from 'axios';
import { useState } from 'react';

const fetchPosts = async (): Promise<ICaptcha> => {
  const response = await axios.get(
    'https://hoadondientu.gdt.gov.vn:30000/captcha'
  );
  const data = await response.data;
  return data;
};
export const useCaptcha = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const { data: res, isLoading, isFetching, error,refetch } = useQuery({
    queryKey: [API_ENDPOINTS.GET_CAPTCHA],
    queryFn: () => client.invoice.getCaptcha(),
    enabled: isLoggedIn,
  });

  console.log(res?.key);
  return {
    captcha: res,
    isLoading,
    error,
    refetch
  };
};

const login = async (loginData: IUserLoginInvoiceOptions): Promise<IAuthenticatedInvoice> => {
  const response = await axios.post<IAuthenticatedInvoice>('/api/login', loginData);
  return response.data;
};

export const useLogin = () => {
  const mutation = useMutation<IAuthenticatedInvoice, Error, IUserLoginInvoiceOptions>({
    mutationFn: client.invoice.loginUser,
    onMutate: async (variables) => {
      // Optionally return a context containing data to use for optimistic updates or rollback
      console.log('Mutation is about to happen:', variables);
      // For optimistic updates or context setup, you can return a context object
      return { rollbackData: variables };
    },
    onError: (error, variables, context) => {
      // Handle the error and possibly roll back optimistic updates
      console.error('Error occurred:', error.message);
      console.log('Rolling back optimistic update with context:', context);
      // Perform rollback logic here if necessary
    },
    onSuccess: (data, variables, context) => {
      // Handle the successful mutation
      localStorage.setItem('jwt', data.token);
      Cookies.set('jwt', data.token);
      console.log('Login successful', data);
    },
    onSettled: (data, error, variables, context) => {
      // This will be called regardless of success or error
      if (error) {
        console.error('Mutation failed:', error.message);
      } else {
        console.log('Mutation settled successfully');
      }
      // Cleanup or additional actions can be done here
    },
  });

  return mutation;
};
