import styles from './WikiCard.module.css';

interface WikiCardProps {
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  category: string;
  description?: string;
}

export default function WikiCard({ name, rarity, category, description }: WikiCardProps) {
  return (
    <div className={`${styles.card} ${styles[rarity.toLowerCase()]}`}>
      <div className={styles.header}>
        <div className={styles.iconPlaceholder}>
          {name[0]}
        </div>
        <div className={styles.titleArea}>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.rarityTag}>{rarity}</span>
        </div>
      </div>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.footer}>
        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
}
