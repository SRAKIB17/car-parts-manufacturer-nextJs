import Navbar from '../components/Header/Navbar'
import '../styles/globals.css'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  return <QueryClientProvider client={queryClient}>
    <Navbar />
    <Component {...pageProps} />
  </QueryClientProvider>

}

export default MyApp
