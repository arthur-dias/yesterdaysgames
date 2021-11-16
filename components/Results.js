import ResultsList from './ResultsList'
import HighlightsList from './HighlightsList'
import styles from './Results.module.css'

const Results = ({ data, text, title }) => {
  return (
    <div>
      <p className={styles.title}>{text}</p>
      <div className={styles.results}>
        <ResultsList data={data} />
        <HighlightsList data={data} title={title} />
      </div>
    </div>
  )
}

export default Results
