import Link from 'next/link'

const Fishings = () => {
  return (
    <div>
      <h1>Fishing</h1>
      <p>釣りに関連するページ</p>
      <Link href='/'>
        <a>トップに戻る</a>
      </Link>
    </div>
  )
}
export default Fishings