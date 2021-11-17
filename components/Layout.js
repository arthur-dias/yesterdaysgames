import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
