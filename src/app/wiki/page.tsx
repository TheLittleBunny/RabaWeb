import Link from 'next/link';
import styles from './page.module.css';

export default function WikiHome() {
  const categories = [
    { name: "Armas", icon: "⚔️", href: "/wiki/armas" },
    { name: "Armaduras", icon: "🛡️", href: "/wiki/armaduras" },
    { name: "Materiales", icon: "💎", href: "/wiki/materiales" },
    { name: "Razas", icon: "🧬", href: "/wiki/razas" },
    { name: "Estadísticas", icon: "📊", href: "/wiki/estadisticas" },
    { name: "Guía Inicio", icon: "📖", href: "/wiki/guia-inicio" },
    { name: "Jefes", icon: "☠️", href: "#" },
    { name: "Mascotas", icon: "🐾", href: "#" },
  ];

  return (
    <div className={styles.container}>
      
      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.introCard}>
          <div className={styles.introIcon}>📚</div>
          <span className={styles.introTitle}>Introducción</span>
        </div>
        <div className={styles.introText}>
          <h2>Bienvenido a la Wiki Oficial de RabaWeb!</h2>
          <p>
            Nuestro objetivo es proporcionar la información más precisa de la mejor manera posible. 
            Continuamente mejoraremos donde sea necesario y esperamos ofrecer la mejor transparencia.
          </p>
          <p>
            ¿Interesado en ayudar a mejorar la Wiki? Por favor <Link href="#" className={styles.link}>reporta</Link> cualquier 
            información faltante o incorrecta que puedas encontrar.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsRow}>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>📝</span>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>152</span>
            <span className={styles.statLabel}>Artículos</span>
          </div>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>📖</span>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>843</span>
            <span className={styles.statLabel}>Páginas</span>
          </div>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>📁</span>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>124</span>
            <span className={styles.statLabel}>Archivos</span>
          </div>
        </div>
      </section>

      {/* Content Divider */}
      <div className={styles.contentDivider}>
        <div className={styles.line}></div>
        <span className={styles.dividerText}>Contenido</span>
        <div className={styles.line}></div>
      </div>

      {/* Categories Grid */}
      <section className={styles.grid}>
        {categories.map((cat, index) => (
          <Link href={cat.href} key={index} className={styles.categoryCard}>
            <div className={styles.categoryIcon}>{cat.icon}</div>
            <span className={styles.categoryName}>{cat.name}</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
