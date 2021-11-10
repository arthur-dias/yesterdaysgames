import NextLink from 'next/link'
import styles from './ContentNav.module.css'

const ContentNav = () => {
  return (
    <div className={styles.nav}>
      <p className={styles.title}>LEAGUES</p>
      <NextLink href='/nba'>NBA</NextLink>
      <NextLink href='/nfl'>NFL</NextLink>
      <NextLink href='/premierLeague'>Premier League</NextLink>
      <NextLink href='/brasileirao'>Brasileirão</NextLink>
    </div>
  )
}

export default ContentNav
