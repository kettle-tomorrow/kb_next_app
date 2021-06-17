import Link from 'next/link'
import BlogCardList from '../../components/BlogCardList'
import Layout from '../../components/Layout'
import MainHeader from '../../components/MainHeader'

const Teches = () => {
  return (
    <Layout>
      <div>
        <MainHeader title="Tech" />
        <BlogCardList />
        <Link href='/'>
          <a>トップに戻る</a>
        </Link>
      </div>
    </Layout>
  )
}
export default Teches