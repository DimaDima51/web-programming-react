import styles from "./AsteroidFilters.module.css";

export const AsteroidFilters = ({ isOnlyDanger, setIsOnlyDanger, isKilometers, setIsKilometers }) => {
    return (
        <div className={styles.container}>
            <div className={styles.checkboxContainer}>
                <input type="checkbox" id="dangerous-filter" checked={isOnlyDanger} onClick={() => setIsOnlyDanger(!isOnlyDanger)} />
                <label htmlFor="dangerous-filter">Показать только опасные</label>
            </div>
            <div className={styles.distanceSelector}>
                Расстояние{" "}
                <span className={isKilometers && styles.selected} onClick={() => setIsKilometers(true)}>
                    в километрах
                </span>,{" "}
                <span className={!isKilometers && styles.selected} onClick={() => setIsKilometers(false)}>
                    в дистанциях до Луны
                    </span>
            </div>
        </div>
    );
};
