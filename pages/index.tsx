import Layout from '../components/Layout'
import MainHeader from '../components/MainHeader'
import CardList from '../components/CardList'

const Home = () => {
  return (
    <Layout>
      <main>
        <MainHeader title="kb's Space"/>
        <CardList />
      </main>
    </Layout>
  )
}
export default Home