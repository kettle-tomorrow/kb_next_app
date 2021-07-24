import Link from 'next/link'
import Layout from '../../components/Layout'
import MainHeader from '../../components/MainHeader'

const Blog = (props) => {
  return (
    <Layout>
      <MainHeader title="Blog" />
      <p>{props.article}</p>
      <Link href='/'>
        <a>トップに戻る</a>
      </Link>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const names = ['hoge']
  const paths = names.map(name => `/blogs/${name}`)
  return { paths, fallback: false }
}

export const getStaticProps = ({ params }) => {
  const article = params.id
  return {
    props: {
      article
    }
  }
}

export default Blog
