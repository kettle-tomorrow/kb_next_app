import Link from 'next/link'
import Layout from '../../components/Layout'

const Teches = () => {
  return (
    <Layout>
      <div>
        <h1>Hot</h1>
        <p>技術に関連するページ</p>
        <Link href='/'>
          <a>トップに戻る</a>
        </Link>
      </div>
    </Layout>
  )
}
export default Teches