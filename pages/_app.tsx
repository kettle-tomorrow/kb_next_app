import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>kb's Space</title>
        <meta name="description" content="ここはkbのスペースです" />
        <link rel="icon" href="/sam.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
