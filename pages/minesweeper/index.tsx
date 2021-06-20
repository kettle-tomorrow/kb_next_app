import MainHeader from '../../components/MainHeader'
import Link from 'next/link'

const Minesweeper = () => {
  return (
    <div>
      <MainHeader title="マインスイーパー" />
      <Link href='/'>
        <a>トップに戻る</a>
      </Link>
    </div>
  )
}
export default Minesweeper