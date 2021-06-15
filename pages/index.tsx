import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>kb's Space</title>
        <meta name="description" content="ここはkbのスペースです" />
        <link rel="icon" href="/sam.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>kb's Space</h1>

        <p className={styles.description}>
          <code className={styles.code}>Next.js, TypeScript</code>の学習スペース
        </p>

        <div className={styles.grid}>
          <Link href='/alcohols'>
            <a className={styles.card} >
              <h2>Alcohol &rarr;</h2>
              <p>お酒に関するページ</p>
            </a>
          </Link>
          
          <Link href="/fishings">
            <a className={styles.card}>
              <h2>Fishing &rarr;</h2>
              <p>釣りに関するページ</p>
            </a>
          </Link>

          <Link href='/hots'>
            <a className={styles.card}>
              <h2>Hot &rarr;</h2>
              <p>辛いものに関するページ</p>
            </a>
          </Link>

          <Link href='/teches'>
            <a className={styles.card}>
              <h2>Tech &rarr;</h2>
              <p>技術に関するページ</p>
            </a>
          </Link>
        </div>
      </main>

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
export default Home