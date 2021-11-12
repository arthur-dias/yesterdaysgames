import ResultsList from './ResultsList'
import HighlightsList from './HighlightsList'
import styles from './Results.module.css'

const Results = ({ data, text }) => {
  return (
    <div className={styles.results}>
      <p className={styles.title}>{text}</p>
      <ResultsList data={data} />
      <HighlightsList data={data} />
    </div>
  )
}

export default Results
