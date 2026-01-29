import WikiCard from '@/components/WikiCard';

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
    <div>
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", color: "var(--accent-color)" }}>Wiki de RabaWeb</h1>
        <p>Explora los ítems, razas y mecánicas de RabaCore y RabaPVP.</p>
      </div>

      <h2 style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
        Contenido Destacado
      </h2>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap: "1.5rem" 
      }}>
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
    </div>
  );
}
