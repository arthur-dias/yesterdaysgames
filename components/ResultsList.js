const ResultsList = ({ data }) => {
  const threadsData = data.data.data.children

  if (threadsData.length === 0) {
    return <p>Choose another league on the left to see the results!</p>
  } else {
    return (
      <div>
        <ul>
          {threadsData.map((thread) => (
            <li key={thread.data.title}>
              <a href={thread.data.url} target='_blank' rel='noreferrer'>
                {thread.data.title}
              </a>
              <button>
                <a href={thread.data.url} target='_blank' rel='noreferrer'>
                  Thread
                </a>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ResultsList
