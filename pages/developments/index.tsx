import Link from 'next/link'
import BlogCardList from '../../components/BlogCardList'
import Layout from '../../components/Layout'
import MainHeader from '../../components/MainHeader'

const Developments = () => {
  return (
    <Layout>
      <MainHeader title="Development" />
      <BlogCardList />
      <Link href='/'>
        <a>トップに戻る</a>
      </Link>
    </Layout>
  )
}
export default Developments