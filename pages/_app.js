import '../styles/globals.css'
import Header from '../components/Header'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Nunito:wght@200;400;700&display=swap" rel="stylesheet" /> 
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
