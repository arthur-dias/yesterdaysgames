import Link from 'next/link'

const Footer = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <p>Made by Arthur</p>
      <Link href='#'>Buy me a coffee</Link>
    </div>
  )
}

export default Footer
