import NextLink from 'next/link'

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
      <NextLink href='#'>Buy me a coffee</NextLink>
    </div>
  )
}

export default Footer
