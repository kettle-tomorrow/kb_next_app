import Link from 'next/link'

const Hots = () => {
  return (
    <div>
      <h1>Hot</h1>
      <p>辛いものに関連するページ</p>
      <Link href='/'>
        <a>トップに戻る</a>
      </Link>
    </div>
  )
}
export default Hots