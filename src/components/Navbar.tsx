import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">RabaWeb Wiki</Link>
      </div>
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Buscar ítems..." 
          className={styles.searchInput}
        />
      </div>
      <div className={styles.links}>
        <a href="https://hostinger.com" target="_blank" rel="noopener noreferrer">Hosting</a>
      </div>
    </nav>
  );
}
