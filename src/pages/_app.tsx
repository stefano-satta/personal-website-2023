import '../styles/app.scss';
import type { AppProps } from 'next/app'
import RouterLayout from '@/components/common/RouterLayout';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  
    return () => { }
  }, [])
  


  return (
    <SSRProvider>
      <RouterLayout>
        <Component {...pageProps} />
      </RouterLayout>
    </SSRProvider>
    
  )
}
