import Link from 'next/link'
import styles from './ContentNav.module.css'

const ContentNav = () => {
  return (
    <div className={styles.nav}>
      <p className={styles.title}>Leagues</p>
      <Link href='/nba'>NBA</Link>
      <Link href='/nfl'>NFL</Link>
      <Link href='/premierLeague'>Premier League</Link>
      <Link href='/brasileirao'>Brasileirão</Link>
    </div>
  )
}

export default ContentNav