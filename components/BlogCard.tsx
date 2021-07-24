import Link from 'next/link'

const BlogCard = () => {
  return (
    <Link href='/blogs/hoge'>
      <div className='p-4 w-full hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 active:text-blue-500 active:border-blue-500'>
        <h2 className='text-base'>タイトル</h2>
      </div>
    </Link>
  )
}
export default BlogCard