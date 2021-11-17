import ResultsList from './ResultsList'
import HighlightsList from './HighlightsList'
import styles from '../styles/Results.module.css'

const Results = ({ data, text, title, buttonText }) => {
  return (
    <div>
      <p className={styles.title}>{text}</p>
      <div className={styles.results}>
        <ResultsList data={data} />
        <HighlightsList data={data} title={title} buttonText={buttonText} />
      </div>
    </div>
  )
}

export default Results
