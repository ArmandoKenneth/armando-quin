import { FC } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

import logo from './logo.svg'
import './App.css'
import MainPage from './components/MainPage'


const queryClient = new QueryClient()

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage logo={logo} />
    </QueryClientProvider>
  );
}

export default App
