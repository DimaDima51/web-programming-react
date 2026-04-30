import styles from "./AsteroidAction.module.css";
import { memo, useCallback } from 'react';

export const AsteroidAction = memo(({ isDanger, isAdded, onDestroymentClick }) => {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        onDestroymentClick(e);
    }, [onDestroymentClick]);

    return (
        <div className={styles.container}>
            <div>Оценка: </div>
            <div style={{ fontWeight: 'bold' }}>{isDanger ? 'Опасен' : 'Не опасен'}</div>

            <button className={styles.button} onClick={handleClick}>
                {isAdded ? 'Отобран' : 'На уничтожение'}
            </button>
        </div>
    );
});

AsteroidAction.displayName = "AsteroidAction";