import Card from "./Card"

const Cards = () => {
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
        path='/hots'
        title='Hot'
        description='辛いものに関するページ'
      />
      <Card
        path='/teches'
        title='Tech'
        description='技術に関するページ'
      />
    </div>
  )
}
export default Cards