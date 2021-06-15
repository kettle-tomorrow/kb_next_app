import styles from './Layout.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Footer from './Footer'

const Layout = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>kb's Space</title>
        <meta name="description" content="ここはkbのスペースです" />
        <link rel="icon" href="/sam.png" />
      </Head>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout