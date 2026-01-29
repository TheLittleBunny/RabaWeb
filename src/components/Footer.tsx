import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Us */}
        <div className={styles.column}>
          <h3 className={styles.title}>Sobre Nosotros</h3>
          <p className={styles.description}>
            Rabanitos SMP es un servidor de Minecraft Survival Semi-RPG que busca ampliar y mejorar la experiencia vanilla. 
            Con mecánicas únicas, nuevas armas, armaduras, mobs personalizados, y un mundo por explorar, 
            ¡es el lugar perfecto para tu próxima aventura!
          </p>
        </div>

        {/* Social Links */}
        <div className={`${styles.column} ${styles.centerColumn}`}>
          <h3 className={styles.title}>Redes Sociales</h3>
          <div className={styles.socialConfig}>
            <Link href="https://discord.gg/6MJbuuzKnH" target="_blank" className={styles.socialButton}>
              Discord
            </Link>
            {/* Placeholders for future links if needed */}
            <Link href="#" className={styles.socialButton}>
              TikTok
            </Link>
            <Link href="#" className={styles.socialButton}>
              YouTube
            </Link>
          </div>
        </div>

        {/* Store */}
        <div className={`${styles.column} ${styles.rightColumn}`}>
          <h3 className={styles.title}>Tienda Rabanitos</h3>
          <p className={styles.description} style={{ marginBottom: '1rem', textAlign: 'inherit' }}>
            Adquirir rangos, llaves y otros paquetes en la tienda del servidor nos ayuda a 
            ofrecer contenido de mayor calidad y mejoras para la red.
          </p>
          <button className={styles.storeButton}>
            Visitar Tienda
          </button>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© Copyright Rabanitos SMP {new Date().getFullYear()}. Todos los derechos reservados.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>No estamos afiliados con Minecraft o Mojang.</p>
      </div>
    </footer>
  );
}
