import Head from 'next/head'
import Content from '../components/Content'

const brasileirao = (props) => {
  const threadsData = props.threadsData.data.children

  return (
    <div>
      <Head>
        <title>Brasileirão Games of Yesterday</title>
        <meta
          name='description'
          content='Missed an Brasileirão game? See what happenned here!'
        />
        <link rel='icon' href='../public/favicon.ico' />
      </Head>
      <Content
        data={props}
        text={'Brasileirão'}
        title={'Top Highlights'}
        buttonText={'Watch Highlight'}
      />
    </div>
  )
}

export const getStaticProps = async () => {
  const [threadsRes, highlightsRes] = await Promise.all([
    fetch(
      'https://www.reddit.com/r/futebol/search.json?q=title%3APost+Match+Thread+Brasileir%C3%A3o&restrict_sr=on&include_over_18=on&sort=relevance&t=day'
    ),
    fetch(
      'https://www.reddit.com/r/futebol/search.json?limit=10&q=flair%3ALances&include_over_18=on&restrict_sr=on&t=day&sort=top'
    ),
  ])

  const [threadsData, highlightsData] = await Promise.all([
    threadsRes.json(),
    highlightsRes.json(),
  ])

  return {
    props: {
      threadsData,
      highlightsData,
    },
    revalidate: 600,
  }
}

export default brasileirao
