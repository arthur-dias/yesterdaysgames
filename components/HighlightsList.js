import styles from './HighlightsList.module.css'

const HighlightsList = ({ data, title, buttonText }) => {
  const highlightsData = data.highlightsData.data.children

  return (
    <div className={styles.highlightsList}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {highlightsData.map((highlight) => (
          <li className={styles.item} key={highlight.data.title}>
            <button className={styles.button}>
              <a href={highlight.data.url} target='_blank' rel='noreferrer'>
                {buttonText}
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
