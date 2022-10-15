import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.hr}></div>
      <div className={styles.container}>
        <span className={styles.containerText}>Mehmet Alemdar, 2022</span>
        <span className={styles.containerText}>mail: <a className={styles.containerTextLink} href='mailto:alemdarmehmet6@gmail.com'>alemdarmehmet6@gmail</a></span>
        <span className={styles.containerText}>website: <a className={styles.containerTextLink} href='https://mehmetalemdar.me/' target="_blank">https://mehmetalemdar.me</a></span>
      </div>
    </>
  );
}
 
export default Footer;