import Link from 'next/link'
import Layout from '../../components/Layout'
import MainHeader from '../../components/MainHeader'

const Nakamotos = () => {
  return (
    <Layout>
      <div>
        <MainHeader title="Nakamoto"/>
        <Link href='/'>
          <a>トップに戻る</a>
        </Link>
      </div>
    </Layout>
  )
}
export default Nakamotos