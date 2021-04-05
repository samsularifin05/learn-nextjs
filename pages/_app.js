import { Head } from 'next/document';
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  <Head>
   <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
 </Head>
  return <Component {...pageProps} />
}

export default MyApp
