import { FC } from 'react'


import { QueryClient, QueryClientProvider } from 'react-query'

import logo from './logo.svg'
import './App.css'
import MainPage from './components/MainPage'


const queryClient = new QueryClient()

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MainPage />
      </div>
    </QueryClientProvider>
  );
}

export default App
