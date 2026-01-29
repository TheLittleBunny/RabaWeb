export default function RacesPage() {
  return (
    <div className="wiki-page">
      <h1>Razas</h1>
      <p className="intro">
        Al entrar al servidor por primera vez, deberás elegir una raza. 
        Cada raza tiene estadísticas base únicas que definen tu estilo de juego.
      </p>

      <section className="section">
        <h2>Razas Disponibles</h2>
        
        <div className="race-card">
          <h3>🧑 Humano</h3>
          <p>Una raza equilibrada y ofensiva.</p>
          <ul>
            <li><strong>Salud Base:</strong> 35 HP</li>
            <li><strong>Daño Crítico Base:</strong> 35%</li>
          </ul>
        </div>

        <div className="race-card" style={{ marginTop: '2rem' }}>
          <h3>🐺 Semihumano (Demihumano)</h3>
          <p>Una raza resistente con gran vitalidad.</p>
          <ul>
            <li><strong>Salud Base:</strong> 50 HP</li>
            <li><strong>Daño Crítico Base:</strong> 10%</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Selección</h2>
        <p>
          Si no has elegido raza, se abrirá un menú automáticamente al entrar. 
          Una vez seleccionada, tu raza es permanente (salvo eventos especiales).
        </p>
      </section>
    </div>
  );
}
