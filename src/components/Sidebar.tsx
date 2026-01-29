import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>General</h3>
        <Link href="/" className={styles.link}>Inicio</Link>
        <Link href="/wiki/guia-inicio" className={styles.link}>Guía de Inicio</Link>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Ítems</h3>
        <Link href="/wiki/armas" className={styles.link}>Armas</Link>
        <Link href="/wiki/armaduras" className={styles.link}>Armaduras</Link>
        <Link href="/wiki/materiales" className={styles.link}>Materiales</Link>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Mecánicas</h3>
        <Link href="/wiki/razas" className={styles.link}>Razas</Link>
        <Link href="/wiki/estadisticas" className={styles.link}>Estadísticas</Link>
      </div>
    </aside>
  );
}
