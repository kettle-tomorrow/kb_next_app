import styles from './Layout.module.css'
import Footer from './Footer'

const Layout = props => {
  return (
    <div className={styles.container}>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout