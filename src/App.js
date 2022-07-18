import React from 'react'
import MyData from './components/MyData'
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MyData />
      </div>
    </QueryClientProvider>
  )
}

export default App