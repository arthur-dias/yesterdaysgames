import styles from './ResultsList.module.css'

const ResultsList = ({ data }) => {
  const threadsData = data.threadsData.data.children

  if (threadsData.length === 0) {
    return (
      <div className={styles.resultsList}>
        <p className={styles.title}>
          No games were played yesterday! <br />
          <br />
          Choose another league on the left to see the results.
        </p>
      </div>
    )
  } else {
    return (
      <div className={styles.resultsList}>
        <p className={styles.title}>Post Game Threads</p>
        <ul className={styles.list}>
          {threadsData.map((thread) => (
            <li className={styles.item} key={thread.data.title}>
              <button className={styles.button}>
                <a href={thread.data.url} target='_blank' rel='noreferrer'>
                  Go to Thread
                </a>
              </button>
              {thread.data.title
                .replace('[Post Game Thread]', '')
                .replace('Post Game Thread: ', '')
                .replace('Post Match Thread: ', '')
                .replace('Post-Match Thread:', '')
                .replace('[Post-Match Thread]', '')
                .replace('Post-match Thread:', '')
                .replace('Post-match Thread |', '')
                .trim()}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ResultsList
