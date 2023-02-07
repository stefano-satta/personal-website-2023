import '../styles/app.scss';
import type { AppProps } from 'next/app'
import RouterLayout from '@/components/common/RouterLayout';
import SSRProvider from 'react-bootstrap/SSRProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <RouterLayout>
        <Component {...pageProps} />
      </RouterLayout>
    </SSRProvider>
    
  )
}
