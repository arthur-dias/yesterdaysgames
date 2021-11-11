import styles from './ResultsList.module.css'

const ResultsList = ({ data }) => {
  const threadsData = data.data.data.children

  if (threadsData.length === 0) {
    return <p>Choose another league on the left to see the results!</p>
  } else {
    return (
      <div>
        <ul className={styles.list}>
          {threadsData.map((thread) => (
            <li className={styles.item} key={thread.data.title}>
              <button className={styles.button}>
                <a href={thread.data.url} target='_blank' rel='noreferrer'>
                  Go to Thread
                </a>
              </button>
              {thread.data.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ResultsList
