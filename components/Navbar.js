import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>Yesterday&apos;s Matches</h1>
      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
      </div>
    </div>
  )
}

export default Navbar
