import Layout from '../components/Layout'
import MainHeader from '../components/MainHeader'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <Layout>
      <main>
        <MainHeader title="kb's Space"/>
        <Cards />
      </main>
    </Layout>
  )
}
export default Home