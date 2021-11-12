const HighlightsList = ({ data }) => {
  const highlightsData = data.highlightsData.data.children

  return (
    <div>
      <p>Top 5 highlights</p>
      <ul>
        {highlightsData.map((highlight) => (
          <li key={highlight.data.title}>
            <button>
              <a href={highlight.data.url} target='_blank' rel='noreferrer'>
                View highlight
              </a>
            </button>
            {highlight.data.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HighlightsList
