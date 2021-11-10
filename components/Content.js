import ContentNav from './ContentNav'
import Results from './Results'
import styles from './Content.module.css'

const Content = ({ data, text }) => {
  if (!data) {
    return (
      <div className={styles.content}>
        <ContentNav />
        <p className={styles.text}>
          Pick one league on the list to view the Post Match Threads!
        </p>
      </div>
    )
  }
  return (
    <div className={styles.content}>
      <ContentNav />
      <Results data={data} text={text} />
    </div>
  )
}

export default Content
