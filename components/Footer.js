import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href='https://www.buymeacoffee.com/arthurdias'>
        Like it? Buy me a beer
      </Link>
      <Link href='https://github.com/arthur-dias/'>Made by Arthur</Link>
    </div>
  )
}

export default Footer
