import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
