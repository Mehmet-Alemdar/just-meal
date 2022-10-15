import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBox1}>
        <h1 className={styles.containerBox1Title}>Just Meal</h1>
      </div>
      <div className={styles.containerBox2}>
        <a className={styles.containerBox2Link}>Home</a>
        <a className={styles.containerBox2Link}>Search</a>
        <a className={styles.containerBox2Link}>Random Meal</a>
      </div>
    </div>
  );
}
 
export default Navbar;