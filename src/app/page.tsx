import WikiCard from '@/components/WikiCard';

export default function Home() {
  const featuredItems = [
    { name: "Void Scythe", rarity: "Legendary" as const, category: "Weapon", description: "A powerful scythe forged from the void itself. Deals massive damage." },
    { name: "Homing Bullet", rarity: "Rare" as const, category: "Ammunition", description: "Projectiles that seek out their targets with high precision." },
    { name: "Human", rarity: "Common" as const, category: "Race", description: "The standard race with balanced stats." },
    { name: "Demihuman", rarity: "Uncommon" as const, category: "Race", description: "A race with enhanced physical capabilities." },
    { name: "Arena Ticket", rarity: "Common" as const, category: "Material", description: "Used to enter the PVE Arena." },
    { name: "Excalibur", rarity: "Mythic" as const, category: "Weapon", description: "The legendary sword of kings." },
  ];

  return (
    <div>
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", color: "var(--accent-color)" }}>RabaWeb Wiki</h1>
        <p>Explore the items, races, and mechanics of RabaCore & RabaPVP.</p>
      </div>

      <h2 style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
        Featured Content
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
