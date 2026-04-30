import styles from "./AsteroidData.module.css";

const getAsteroidClass = (diameter) => {
    if (diameter > 100 && diameter < 500) return styles.medium;
    if (diameter >= 500) return styles.big;
    return styles.small;
};

export const AsteroidData = ({ name, distance, diameter, date, isKilometers }) => {
    const asteroidClass = getAsteroidClass(diameter);
    
    return (
        <div className={`${styles.container} ${asteroidClass}`}>
            <div className={styles.dino} />
            
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.row}>
                    <span>Дата:</span>
                    <span>{date}</span>
                </div>
                <div className={styles.row}>
                    <span>Расстояние:</span>
                    <span>
                        {isKilometers 
                            ? `${(distance / 1).toFixed(2)} км` 
                            : `${(distance / 164000).toFixed(2)} дист. до Луны`}
                    </span>
                </div>
                <div className={styles.row}>
                    <span>Размер:</span>
                    <span>{(diameter).toFixed(2)} м</span>
                </div>
            </div>
        </div>
    );
};