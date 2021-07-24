import Link from 'next/link'
import BlogCardList from '../../components/BlogCardList'
import Layout from '../../components/Layout'
import MainHeader from '../../components/MainHeader'

const Blogs = () => {
  return (
    <Layout>
      <MainHeader title="Blog" />
      <BlogCardList />
      <Link href='/'>
        <a>トップに戻る</a>
      </Link>
    </Layout>
  )
}
export default Blogs