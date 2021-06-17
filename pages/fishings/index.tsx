import Link from 'next/link'
import Layout from '../../components/Layout'
import MainHeader from '../../components/MainHeader'

const Fishings = () => {
  return (
    <Layout>
      <div>
        <MainHeader title="Fishing"/>
        <Link href='/'>
          <a>トップに戻る</a>
        </Link>
      </div>
    </Layout>
  )
}
export default Fishings