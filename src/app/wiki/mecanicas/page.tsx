import Link from 'next/link';

export default function MechanicsPage() {
  return (
    <div className="wiki-page">
      <h1>Mecánicas Especiales</h1>
      <p className="intro">
        RabaCore introduce estados alterados que pueden cambiar el curso de una batalla.
        Estos efectos se aplican mediante "acumulación" (Buildup).
      </p>

      <section className="section">
        <h2>🩸 Hemorragia (Hemorrhage)</h2>
        <div className="mechanic-details">
          <p>
            Ciertas armas aplican acumulación de Hemorragia al golpear. 
            Al llegar a <strong>100 puntos</strong> de acumulación, el efecto se activa.
          </p>
          <div className="effect-box">
            <h4>Efecto:</h4>
            <p>Inflige <strong>Daño Verdadero</strong> igual al <strong>50% de tu Salud Máxima</strong>.</p>
            <p className="note">*El daño verdadero ignora la defensa.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🌌 Vacío (Void)</h2>
        <div className="mechanic-details">
          <p>
            Armas imbuidas con el poder del Vacío aplican esta acumulación.
            Se activa al llegar a <strong>100 puntos</strong>.
          </p>
          <div className="effect-box">
            <h4>Efectos:</h4>
            <ul>
              <li><strong>Descomposición (Wither II):</strong> Durante 5 segundos.</li>
              <li><strong>Ceguera:</strong> Durante 3 segundos.</li>
              <li><strong>Teletransporte Caótico:</strong> La víctima es teletransportada aleatoriamente a 4-8 bloques de distancia.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Resistencias</h2>
        <p>
          Existen atributos en armaduras como <strong>Resistencia a Hemorragia</strong> y <strong>Resistencia al Vacío</strong> 
          que aumentan el umbral necesario para activar estos efectos, haciéndote más difícil de afectar.
        </p>
      </section>
    </div>
  );
}
