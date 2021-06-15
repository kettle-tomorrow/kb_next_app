import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
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
    </Layout>
  )
}
export default Home