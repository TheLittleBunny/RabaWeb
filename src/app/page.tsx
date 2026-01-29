import WikiCard from '@/components/WikiCard';
import styles from './page.module.css';

export default function Home() {
  const featuredItems = [
    { name: "Guadaña del Vacío", rarity: "Legendary" as const, category: "Arma", description: "Una poderosa guadaña forjada en el vacío mismo. Inflige daño masivo." },
    { name: "Bala Teledirigida", rarity: "Rare" as const, category: "Munición", description: "Proyectiles que buscan a sus objetivos con alta precisión." },
    { name: "Humano", rarity: "Common" as const, category: "Raza", description: "La raza estándar con estadísticas equilibradas." },
    { name: "Semihumano", rarity: "Uncommon" as const, category: "Raza", description: "Una raza con capacidades físicas mejoradas." },
    { name: "Ticket de Arena", rarity: "Common" as const, category: "Material", description: "Usado para entrar a la Arena PVE." },
    { name: "Excalibur", rarity: "Mythic" as const, category: "Arma", description: "La espada legendaria de los reyes." },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBanner}>
          <div className={styles.heroContent}>
            <span className={styles.updateTag}>ACTUALIZACIÓN FEBRERO 2026</span>
            <h1 className={styles.heroTitle}>La Era del Vacío</h1>
            <p className={styles.heroText}>
              Descubre nuevas armas, enfréntate a jefes legendarios y domina la arena 
              en nuestra actualización más grande hasta la fecha.
            </p>
            <button className={styles.ctaButton}>Leer Notas del Parche</button>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Wiki Destacada</h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.grid}>
          {featuredItems.map((item, index) => (
            <WikiCard 
              key={index}
              name={item.name}
              rarity={item.rarity}
              category={item.category}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
