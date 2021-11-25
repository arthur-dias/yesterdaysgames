import Link from 'next/link'
import styles from '../styles/ContentNav.module.css'

const ContentNav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__content}>
        <p className={styles.title}>Leagues</p>
        <Link href='/nba'>NBA</Link>
        <Link href='/nfl'>NFL</Link>
        <Link href='/europeanSoccer'>European Soccer</Link>
        <Link href='/brasileirao'>Brasileirão</Link>
      </div>
    </div>
  )
}

export default ContentNav
