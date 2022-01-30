import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient();

export const wrapPageElement = ({ element }) => {
  return (
    <QueryClientProvider client={client}>
      {element}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
