"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const serverIp = "mc.rabanitos.com";

  const copyIp = () => {
    navigator.clipboard.writeText(serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/" className={styles.logo}>RabaWeb</Link>
      </div>
      
      <div className={styles.centerNav}>
        <Link href="/" className={styles.navLink}>Inicio</Link>
        <Link href="/wiki" className={styles.navLink}>Wiki</Link>
        <Link href="#" className={styles.navLink}>Reglas</Link>
        <Link href="https://discord.gg/6MJbuuzKnH" target="_blank" className={styles.navLink}>Discord</Link>
      </div>

      <div className={styles.actions}>
        <div className={styles.ipContainer} onClick={copyIp}>
          <span className={styles.ipText}>{copied ? "¡Copiado!" : serverIp}</span>
        </div>
        <button className={styles.storeButton}>
          Tienda
        </button>
      </div>
    </nav>
  );
}
