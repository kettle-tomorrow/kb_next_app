import Link from 'next/link'
import Layout from '../../components/Layout'

const Alcohols = () => {
  return (
    <Layout>
      <div>
        <h1>Alcohol</h1>
        <p>お酒に関連するページ</p>
        <Link href='/'>
          <a>トップに戻る</a>
        </Link>
      </div>
    </Layout>
  )
}
export default Alcohols