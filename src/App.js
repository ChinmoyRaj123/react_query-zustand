import React from 'react'
import MyData from './components/MyData'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MyData />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App