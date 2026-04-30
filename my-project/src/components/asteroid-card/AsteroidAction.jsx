import styles from "./AsteroidAction.module.css";
import { useContext } from "react";
import { AppContext } from "../../App";

export const AsteroidAction = ({ id, name, isDanger }) => {

    const { destroyList, setDestroyList } = useContext(AppContext);

    const handleAdd = (e) => {
        setDestroyList(prev => {
            const exists = prev.find(item => item.id === id); // чтобы не было дубликатов
            if (exists) return prev;

            return [...prev, { id, name, isDanger }];
        });
    };

    return (
        <div className={styles.container}>
            <div>Оценка: </div>
            <div style={{ fontWeight: 'bold' }}>{isDanger ? 'Опасен' : 'Не опасен'}</div>

            <button className={styles.button} onClick={handleAdd}>На уничтожение</button>
        </div>
    );
};