import { AsteroidCard } from "../asteroid-card/AsteroidCard"
import styles from './AsteroidList.module.css';
import { useEffect, useState } from "react";
import { AsteroidFilters } from "../asteroid-filters/AsteroidFilters";
import { AsteroidController } from "../../AsteroidContoller";

export const AsteroidsList = () => {

    const [isOnlyDanger, setIsOnlyDanger] = useState(false);
    const [isKilometers, setIsKilometers] = useState(true);

    const [asteroids, setAsteroids] = useState([]);

    useEffect(() => {

        AsteroidController.getAsteroids().then(result => { setAsteroids(result) });

    }, [])

    return (
        <div>
            <AsteroidFilters
                isOnlyDanger={isOnlyDanger}
                setIsOnlyDanger={setIsOnlyDanger}
                isKilometers={isKilometers}
                setIsKilometers={setIsKilometers}
            />
            {isOnlyDanger ? asteroids.filter((it) => it.isDanger).map((it) => (
                <AsteroidCard {...it} isKilometers={isKilometers} />
            )) : asteroids.map((it) => (
                <AsteroidCard {...it} isKilometers={isKilometers} />
            ))}
        </div>
    );
}