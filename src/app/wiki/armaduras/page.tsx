export default function ArmorPage() {
    return (
      <div className="wiki-page">
        <h1>Armaduras</h1>
        <p className="intro">
          Las armaduras en RabaCore no solo protegen, sino que otorgan habilidades únicas y bonificaciones de conjunto.
        </p>
  
        <section className="section">
          <h2>Sets de Armadura</h2>
          
          {/* OAK ARMOR */}
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)' }}>
            <h3 style={{ color: '#f0e68c' }}>🛡️ Set de Roble (Oak)</h3>
            <p>Una armadura pesada hecha de madera encantada. Ideal para tanques que sacrifican movilidad por protección.</p>
            <ul>
              <li><strong>Rarity:</strong> Common</li>
              <li><strong>Stats Totales:</strong> 35 Defensa, +55% Resistencia al Empuje, -2.5% Velocidad</li>
              <li><strong>Piezas:</strong> Casco (Cuero/Tronco), Pechera, Pantalones, Botas (Con Caída de Pluma X)</li>
            </ul>
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '4px' }}>
              <strong>🌟 Bono de Set Completo: Roble</strong>
              <p>Otorga <strong>Resistencia I</strong> y <strong>Regeneración I</strong> constante, pero aplica <strong>Lentitud I</strong> debido al peso.</p>
            </div>
          </div>
  
          {/* DIVING ARMOR */}
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)' }}>
            <h3 style={{ color: '#00bfff' }}>🤿 Set de Buceo (Diving)</h3>
            <p>Equipo especializado para la exploración submarina.</p>
            <ul>
              <li><strong>Rarity:</strong> Common</li>
              <li><strong>Stats Totales:</strong> 4 Defensa</li>
              <li><strong>Piezas:</strong> Casco (Cristal), Pechera, Pantalones, Botas (Con Agilidad Acuática III)</li>
            </ul>
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0, 191, 255, 0.1)', borderRadius: '4px' }}>
              <strong>🌟 Bono de Set Completo: Buzo</strong>
              <p>Otorga <strong>Respiración Acuática</strong> infinita y <strong>Visión Nocturna</strong> para ver en las profundidades.</p>
            </div>
          </div>

          {/* CORRODED ARMOR */}
          <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-secondary)' }}>
            <h3 style={{ color: '#708090' }}>🏚️ Set Corroido (Corroded)</h3>
            <p>Armadura de hierro desgastada por la influencia del vacío y la marchitez.</p>
            <ul>
              <li><strong>Rarity:</strong> Uncommon</li>
              <li><strong>Stats Totales:</strong> 20 Defensa, +2.0 Bono Daño Wither, +8 Bono Acumulación Vacío</li>
            </ul>
            <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(112, 128, 144, 0.1)', borderRadius: '4px' }}>
              <strong>💀 Especialidad</strong>
              <p>Potencia tus ataques de tipo <strong>Marchitez (Wither)</strong> y acelera la acumulación del efecto <strong>Vacío</strong> en tus enemigos.</p>
            </div>
          </div>
  
        </section>
      </div>
    );
  }
