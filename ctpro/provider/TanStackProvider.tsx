'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const TanStackProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanStackProvider;
