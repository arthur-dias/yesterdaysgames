import Content from '../components/Content'

const nba = (props) => {
  const threadsData = props.threadsData.data.children

  return (
    <div>
      <Content
        data={props}
        text={'NBA'}
        title={'Top Highlights'}
        buttonText={'Watch Highlight'}
      />
    </div>
  )
}

export const getStaticProps = async () => {
  const [threadsRes, highlightsRes] = await Promise.all([
    fetch(
      'https://www.reddit.com/r/nba/search.json?q=title%3A%22Post+Game+Thread%22&restrict_sr=on&include_over_18=on&sort=relevance&t=day'
    ),
    fetch(
      'https://www.reddit.com/r/nba/search.json?q=flair%3Ahighlight&include_over_18=on&restrict_sr=on&t=day&sort=top&limit=10'
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

export default nba
