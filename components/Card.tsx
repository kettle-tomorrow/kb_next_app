import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Card = (props) => {
  return (
    <Link href={props.path}>
      <a className='m-4 p-6 text-left border-solid border-2 rounded-md w-2/5 text-current hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 active:text-blue-500 active:border-blue-500' >
        <h2 className='text-base'>{props.title} &rarr;</h2>
        <p className='text-sm'>{props.description}</p>
      </a>
    </Link>
  )
}
export default Card