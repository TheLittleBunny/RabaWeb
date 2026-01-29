export default function StatsPage() {
  return (
    <div className="wiki-page">
      <h1>Estadísticas</h1>
      <p className="intro">
        Las estadísticas definen el poder y la resistencia de tu personaje en RabaPVP. 
        Pueden ser modificadas por tu raza, armadura y armas.
      </p>

      <section className="section">
        <h2>Principales</h2>
        <div className="stat-card">
          <h3>❤ Salud (Health)</h3>
          <p>La cantidad de daño que puedes recibir antes de morir. Aumentada por Razas y Armaduras.</p>
        </div>
        <div className="stat-card">
          <h3>🛡️ Defensa (Defense)</h3>
          <p>Reduce el daño físico recibido. Cuanta más defensa tengas, mayor será la reducción de daño porcentual.</p>
        </div>
        <div className="stat-card">
          <h3>⚔️ Fuerza (Strength)</h3>
          <p>Aumenta el daño físico que infliges con armas cuerpo a cuerpo.</p>
        </div>
        <div className="stat-card">
          <h3>🗡️ Daño (Damage)</h3>
          <p>El daño base de tus ataques, sumado al daño del arma y multiplicado por tu Fuerza.</p>
        </div>
      </section>

      <section className="section">
        <h2>Combate</h2>
        <ul>
          <li><strong>Probabilidad Crítica:</strong> La chance de infligir un golpe crítico (daño extra).</li>
          <li><strong>Daño Crítico:</strong> El multiplicador de daño al asestar un golpe crítico.</li>
          <li><strong>Velocidad:</strong> Tu velocidad de movimiento.</li>
          <li><strong>Resistencia al Empuje:</strong> Probabilidad de no ser empujado al recibir daño.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Mágicas</h2>
        <ul>
          <li><strong>Daño Mágico:</strong> Aumenta el daño de hechizos y habilidades especiales.</li>
          <li><strong>Resistencia Mágica:</strong> Reduce el daño recibido de fuentes mágicas.</li>
        </ul>
      </section>
    </div>
  );
}
