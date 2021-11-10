import NextLink from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>Yesterday&apos;s Matches</h1>
      <div className={styles.links}>
        <NextLink href='/'>Home</NextLink>
        <NextLink href='/about'>About</NextLink>
      </div>
    </div>
  )
}

export default Navbar
