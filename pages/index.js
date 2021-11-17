import Head from 'next/head'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yesterday's Games</title>
        <meta
          name='description'
          content='Missed a game? See what happenned here!'
        />
        <link rel='icon' href='../public/favicon.ico' />
      </Head>

      <Content />
    </div>
  )
}
