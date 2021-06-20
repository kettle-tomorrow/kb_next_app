import styles from './Layout.module.css'
import Footer from './Footer'

const Layout = props => {
  return (
    <main className={styles.container}>
      {props.children}
      <Footer />
    </main>
  )
}

export default Layout