import Content from '../components/Content'

const premierLeague = (data) => {
  const threadsData = data.data.data.children

  return (
    <div>
      <Content
        data={data}
        text={
          threadsData.length === 0
            ? 'No Premier League games played yesterday'
            : 'Premier League'
        }
      />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `https://www.reddit.com/r/soccer/search.json?q=title%3APost+Match+Thread+Premier+League&restrict_sr=on&include_over_18=on&sort=relevance&t=day`
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default premierLeague
