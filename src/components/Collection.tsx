import styles from "../styles/Collection.module.css";

interface CollectionProps {
  imgCollection: string;
  title: string;
  text: string;
}

export default function Collection({ imgCollection, title, text }: CollectionProps) {
  return (
    <div className={styles.collectionContainer}>
      <div className={styles.imgContainer}>
        <img src={imgCollection} alt="Collection Image"/>
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <button className={styles.loadMoreBtn}>VER MAS</button>
      </div>
    </div>
  );
}
