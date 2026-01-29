import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>General</h3>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/wiki/getting-started" className={styles.link}>Getting Started</Link>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Items</h3>
        <Link href="/wiki/weapons" className={styles.link}>Weapons</Link>
        <Link href="/wiki/armor" className={styles.link}>Armor</Link>
        <Link href="/wiki/materials" className={styles.link}>Materials</Link>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Mechanics</h3>
        <Link href="/wiki/races" className={styles.link}>Races</Link>
        <Link href="/wiki/stats" className={styles.link}>Stats</Link>
      </div>
    </aside>
  );
}
