import GlobalStyles from '../styles/GlobalStyle';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
