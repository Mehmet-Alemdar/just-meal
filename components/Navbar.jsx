import styles from '../styles/Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <div className={styles.containerBox1}>
          <h1 className={styles.containerBox1Title}>Just Meal</h1>
        </div>
      </Link>
      <div className={styles.containerBox2}>
        <Link href='/'>
          <a className={styles.containerBox2Link}>Home</a>
        </Link>
        <Link href='/search'>
          <a className={styles.containerBox2Link}>Search</a>
        </Link>
        <Link href='/random-meal'>
          <a className={styles.containerBox2Link}>Random Meal</a>
        </Link>
      </div>
    </div>
  );
}
 
export default Navbar;