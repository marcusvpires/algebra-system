import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/cssReset';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
