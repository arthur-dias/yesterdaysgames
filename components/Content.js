import ContentNav from './ContentNav'
import Results from './Results'
import styles from '../styles/Content.module.css'

const Content = ({ data, text, title, buttonText }) => {
  if (!data) {
    return (
      <div className={styles.content}>
        <ContentNav />
      </div>
    )
  }
  return (
    <div className={styles.content}>
      <ContentNav />
      <Results data={data} text={text} title={title} buttonText={buttonText} />
    </div>
  )
}

export default Content
