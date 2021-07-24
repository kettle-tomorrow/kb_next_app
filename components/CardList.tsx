import Card from "./Card"

const CardList = () => {
  return (
    <div className='flex flex-wrap max-w-screen-md justify-center'>
      <Card
        path='/blogs'
        title='Blog'
        description='ブログ'
      />
      <Card
        path='/minesweeper'
        title='Minesweeper'
        description='マインスイーパー'
      />
    </div>
  )
}
export default CardList