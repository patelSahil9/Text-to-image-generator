import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Query } from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ReactDOM from "react-dom/client";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <QueryClientProvider client={queryClient}>
  {/* // <StrictMode>  */}
    <App />
  {/* </StrictMode>, */}
  {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
)
