import Content from '../components/Content'

const brasileirao = (props) => {
  const threadsData = props.threadsData.data.children

  return (
    <div>
      <Content
        data={props}
        text={'Brasileirão'}
        title={'Top 5 Discussion topics'}
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
      'https://www.reddit.com/r/futebol/search.json?limit=5&q=flair%3ADiscuss%C3%A3o&restrict_sr=on&include_over_18=on&sort=relevance&t=day'
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

export default brasileirao
