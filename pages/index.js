import Head from 'next/head'
import ContentNav from '../components/ContentNav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yesterday Games</title>
        <meta
          name='description'
          content='Missed a game? See what happenned here!'
        />
        <link rel='icon' href='../public/favicon.ico' />
      </Head>

      <ContentNav />
    </div>
  )
}
