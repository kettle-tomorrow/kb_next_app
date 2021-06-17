import Link from 'next/link'
import Layout from '../../components/Layout'
import MainHeader from '../../components/MainHeader'

const Alcohols = () => {
  return (
    <Layout>
      <main>
        <MainHeader title="Alcohol"/>
        <Link href='/'>
          <a>トップに戻る</a>
        </Link>
      </main>
    </Layout>
  )
}
export default Alcohols