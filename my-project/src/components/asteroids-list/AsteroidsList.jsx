import { AsteroidCard } from "../asteroid-card/AsteroidCard"
import styles from './AsteroidList.module.css';
import { useEffect, useState, useContext } from "react";
import { AsteroidFilters } from "../asteroid-filters/AsteroidFilters";
import { AsteroidController } from "../../AsteroidContoller";
import { AppContext } from "../../App";

export const AsteroidsList = () => {

    const [isOnlyDanger, setIsOnlyDanger] = useState(false);
    const [isKilometers, setIsKilometers] = useState(true);

    // теперь тут Context
    const { asteroids, setAsteroids, destroyList } = useContext(AppContext);

    useEffect(() => {
        AsteroidController.getAsteroids().then(result => {
            setAsteroids(result)
        });
    }, []);

    const filteredAsteroids = asteroids.filter(
        (a) => !destroyList.find(d => d.id === a.id)
    );

    return (
        <div>
            <AsteroidFilters isOnlyDanger={isOnlyDanger} setIsOnlyDanger={setIsOnlyDanger} isKilometers={isKilometers} setIsKilometers={setIsKilometers} />

            {isOnlyDanger
                ? filteredAsteroids.filter((it) => it.isDanger).map((it) => (
                    <AsteroidCard key={it.id} {...it} isKilometers={isKilometers} />
                ))
                : filteredAsteroids.map((it) => (
                    <AsteroidCard key={it.id} {...it} isKilometers={isKilometers} />
                ))
            }
        </div>
    );
}