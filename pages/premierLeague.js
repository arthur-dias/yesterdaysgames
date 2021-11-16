import Content from '../components/Content'

const premierLeague = (props) => {
  const threadsData = props.threadsData.data.children

  return (
    <div>
      <Content
        data={props}
        text={'Premier League'}
        title={'Top 5 Discussion topics'}
      />
    </div>
  )
}

export const getStaticProps = async () => {
  const [threadsRes, highlightsRes] = await Promise.all([
    fetch(
      'https://www.reddit.com/r/soccer/search.json?q=title%3APost+Match+Thread+Premier+League&restrict_sr=on&include_over_18=on&sort=relevance&t=day'
    ),
    fetch('https://www.reddit.com/r/soccer/top.json?limit=5&sort=top&t=day'),
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
