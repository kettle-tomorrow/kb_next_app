import styles from './Layout.module.css'
import Image from 'next/image'
import Head from 'next/head'

const Layout = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>kb's Space</title>
        <meta name="description" content="ここはkbのスペースです" />
        <link rel="icon" href="/sam.png" />
      </Head>
      {props.children}
      <footer className={styles.footer}>
        <p>
        Powered by{' '}
          <span className={styles.logo}>
            <Image src="/sam.png" width={30} height={30} />
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Layout