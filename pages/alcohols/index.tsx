import Link from 'next/link'

const Alcohols = () => {
  return (
    <div>
      <h1>Alcohol</h1>
      <p>お酒に関連するページ</p>
      <Link href='/'>
        <a>トップに戻る</a>
      </Link>
    </div>
  )
}
export default Alcohols