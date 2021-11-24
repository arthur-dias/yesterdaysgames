import Content from '../components/Content'

const premierLeague = (props) => {
  const threadsData = props.threadsData.data.children

  return (
    <div>
      <Content
        data={props}
        text={'Europen Soccer'}
        title={'Top Highlights'}
        buttonText={'Watch Highlight'}
      />
    </div>
  )
}

export const getStaticProps = async () => {
  const [threadsRes, highlightsRes] = await Promise.all([
    fetch(
      'https://www.reddit.com/r/soccer/search.json?q=title%3APost+Match+Thread&restrict_sr=on&include_over_18=on&sort=relevance&t=day'
    ),
    fetch(
      'https://www.reddit.com/r/soccer/search.json?limit=10&sort=top&q=flair%3Amedia+OR+flair%3AMirror&t=day&restrict_sr=on'
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

export default premierLeague
