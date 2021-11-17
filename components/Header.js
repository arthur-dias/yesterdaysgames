import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.text}>
        Slept through the game? Dinner took longer tha expected? Your data
        runned out during the party?
      </p>
      <p className={styles.text}>All of the above?</p>
      <p className={styles.text}>
        Simply select one league on the list and get access to the post match
        thread on Reddit and the top 5 most viewed highlights and discussion
        topics of yesterday.
      </p>
    </div>
  )
}

export default Header
