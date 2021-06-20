import MainHeader from '../../components/MainHeader'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Board from '../../components/Board'

const Minesweeper = () => {
  return (
    <Layout>
      <MainHeader title="マインスイーパー" />
      <Board />
      <Link href='/'>
        <a>トップに戻る</a>
      </Link>
    </Layout>
  )
}
export default Minesweeper