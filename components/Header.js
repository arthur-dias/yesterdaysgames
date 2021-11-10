import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Title</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        recusandae maiores? Molestias molestiae laboriosam ut nisi. Praesentium
        nihil perspiciatis non eaque vitae saepe sed, blanditiis libero
        accusamus.
      </p>
    </div>
  )
}

export default Header
