export default function WeaponsPage() {
    return (
      <div className="wiki-page">
        <h1>Armas</h1>
        <p className="intro">
          Arsenal especializado con efectos de estado devastadores.
        </p>
  
        <section className="section">
          <h2>Hemorragia (Bleeding)</h2>
          <p>Estas armas aplican un efecto acumulativo que detona tras varios golpes.</p>
          
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)' }}>
            <h3 style={{ color: '#ff4444' }}>🩸 Odachi de Sanguijuela</h3>
            <ul>
              <li><strong>Rarity:</strong> Legendary</li>
              <li><strong>Material:</strong> Netherite Sword</li>
              <li><strong>Stats:</strong> 50 Daño, 45 Fuerza</li>
              <li><strong>Efecto:</strong> Aplica <strong>34</strong> de Hemorragia por golpe. (Detona en ~3 golpes).</li>
            </ul>
          </div>

          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)' }}>
            <h3 style={{ color: '#cd5c5c' }}>🪡 Aguja Oxidada</h3>
            <ul>
              <li><strong>Rarity:</strong> Common</li>
              <li><strong>Material:</strong> Wooden Sword</li>
              <li><strong>Stats:</strong> 5 Daño</li>
              <li><strong>Efecto:</strong> Aplica <strong>20</strong> de Hemorragia por golpe. (Detona en ~5 golpes).</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Vacío (Void)</h2>
          <p>Armas imbuidas con la esencia de la nada absoluta.</p>

          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)' }}>
            <h3 style={{ color: '#da70d6' }}>🌌 Segadora del Vacío</h3>
            <ul>
              <li><strong>Rarity:</strong> Mythic (Glowing)</li>
              <li><strong>Material:</strong> Netherite Sword</li>
              <li><strong>Stats:</strong> 11 Daño, 15 Fuerza</li>
              <li><strong>Efecto:</strong> Aplica <strong>50</strong> de Vacío por golpe.</li>
            </ul>
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(218, 112, 214, 0.1)', borderRadius: '4px' }}>
              <strong>🌀 Detonación de Vacío</strong>
              <p>Al llenarse la barra, el objetivo es teletransportado aleatoriamente, cegado y recibe daño de Marchitez.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
