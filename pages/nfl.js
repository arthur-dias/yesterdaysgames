import Content from '../components/Content'

const nfl = (data) => {
  const threadsData = data.data.data.children

  return (
    <div>
      <Content
        data={data}
        text={
          threadsData.length === 0 ? 'No NFL games played yesterday' : 'NFL'
        }
      />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `https://www.reddit.com/r/nfl/search.json?q=title%3A%22Post+Game+Thread%22&restrict_sr=on&include_over_18=on&sort=relevance&t=day`
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

export default nfl
