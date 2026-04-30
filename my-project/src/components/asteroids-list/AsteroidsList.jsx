import styles from './AsteroidList.module.css';
import { useEffect, useState, useContext } from "react";
import { AsteroidFilters } from "../asteroid-filters/AsteroidFilters";
import { AsteroidController } from "../../AsteroidContoller";
import { AppContext } from "../../App";
import { AsteroidCardContainer } from "../asteroid-card/AsteroidCardContainer";

export const AsteroidsList = () => {

    const [isOnlyDanger, setIsOnlyDanger] = useState(false);
    const [isKilometers, setIsKilometers] = useState(true);

    const { asteroids, setAsteroids, destroyList } = useContext(AppContext);

    useEffect(() => {
        AsteroidController.getAsteroids().then(result => {
            setAsteroids(result);
        });
    }, [setAsteroids]);

    const listToRender = isOnlyDanger
        ? asteroids.filter((it) => it.isDanger)
        : asteroids;

    const emptyMessage = isOnlyDanger
        ? "Хьюстон, хорошие новости! Похоже, сейчас нет ни одного опасного астероида."
        : "Список астероидов пока пуст. Ура! Мы спасли планету!)";

    return (
        <div>
            <AsteroidFilters isOnlyDanger={isOnlyDanger} setIsOnlyDanger={setIsOnlyDanger} isKilometers={isKilometers} setIsKilometers={setIsKilometers} />

            {listToRender.length === 0 ? (
                <div className={styles.emptyMessage}>{emptyMessage}</div>
            ) : (
                listToRender.map((it) => (
                    <AsteroidCardContainer key={it.id} {...it} isKilometers={isKilometers} />
                ))
            )}
        </div>
    );
};