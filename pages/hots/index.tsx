import Link from 'next/link'
import Layout from '../../components/Layout'
import MainHeader from '../../components/MainHeader'

const Hots = () => {
  return (
    <Layout>
      <div>
        <MainHeader title="Hot"/>
        <Link href='/'>
          <a>トップに戻る</a>
        </Link>
      </div>
    </Layout>
  )
}
export default Hots