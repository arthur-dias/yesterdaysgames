import Head from 'next/head'
import Content from '../components/Content'

const nfl = (props) => {
  const threadsData = props.threadsData.data.children

  return (
    <div>
      <Head>
        <title>NFL Games of Yesterday</title>
        <meta
          name='description'
          content='Missed an NFL game? See what happenned here!'
        />
        <link rel='icon' href='../public/favicon.ico' />
      </Head>
      <Content
        data={props}
        text={'NFL'}
        title={'Top Highlights'}
        buttonText={'Watch Highlight'}
      />
    </div>
  )
}

export const getStaticProps = async () => {
  const [threadsRes, highlightsRes] = await Promise.all([
    fetch(
      'https://www.reddit.com/r/nfl/search.json?q=title%3A%22Post+Game+Thread%22&restrict_sr=on&include_over_18=on&sort=relevance&t=day'
    ),
    fetch(
      'https://www.reddit.com/r/nfl/search.json?limit=10&q=flair%3Ahighlight&include_over_18=on&restrict_sr=on&t=day&sort=top'
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
  }
}

export default nfl
