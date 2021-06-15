import Link from 'next/link'
import Layout from '../../components/Layout'

const Hots = () => {
  return (
    <Layout>
      <div>
        <h1>Hot</h1>
        <p>辛いものに関連するページ</p>
        <Link href='/'>
          <a>トップに戻る</a>
        </Link>
      </div>
    </Layout>
  )
}
export default Hots