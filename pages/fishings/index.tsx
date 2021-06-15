import Link from 'next/link'
import Layout from '../../components/Layout'

const Fishings = () => {
  return (
    <Layout>
      <div>
        <h1>Fishing</h1>
        <p>釣りに関連するページ</p>
        <Link href='/'>
          <a>トップに戻る</a>
        </Link>
      </div>
    </Layout>
  )
}
export default Fishings