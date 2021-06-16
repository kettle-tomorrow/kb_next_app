import styles from './Layout.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
      Powered by{' '}
        <span>
          <Image src="/sam.png" width={30} height={30} />
        </span>
      </p>
    </footer>
  )
}

export default Footer