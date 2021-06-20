import Card from "./Card"

const CardList = () => {
  return (
    <div className='flex flex-wrap max-w-screen-md justify-center'>
      <Card
        path='/alcohols'
        title='Alcohol'
        description='お酒に関するページ'
      />
      <Card
        path='/fishings'
        title='Fishing'
        description='釣りに関するページ'
      />
      <Card
        path='/nakamotos'
        title='Nakamotos'
        description='中本に関するページ'
      />
      <Card
        path='/developments'
        title='Development'
        description='開発に関するページ'
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