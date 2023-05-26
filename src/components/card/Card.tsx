import styles from "./Card.module.css";

export const Card: React.FC<Card> = ({ imagePath, cardId }) => {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.card__img} src={imagePath} alt="card" />
                {/* <img className={styles.card__reverse} src="" alt="back" /> */}
                {/* <div className={styles.card__reverse}></div> */}
                <p>{cardId}</p>
            </div>
        </>
    );
};
