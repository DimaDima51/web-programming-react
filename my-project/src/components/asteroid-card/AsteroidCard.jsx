import { useCallback, memo } from "react";
import { AsteroidAction } from "./AsteroidAction";
import styles from "./AsteroidCard.module.css";
import { AsteroidData } from "./AsteroidData";
import { Link } from "react-router-dom";

export const AsteroidCard = memo((props) => {
    const { id, onDestroymentClick, isAdded, isDanger, name, distance, diameter, date, isKilometers } = props;

    const clickHandler = useCallback((ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        onDestroymentClick();
    }, [onDestroymentClick]);

    return (
        <div className={isDanger ? styles.containerDanger : styles.container}>
            <Link to={`/asteroids/${id}`}>
                <AsteroidData name={name} distance={distance} diameter={diameter} date={date} isKilometers={isKilometers} />
            </Link>

            <AsteroidAction isDanger={isDanger} isAdded={isAdded} onDestroymentClick={clickHandler} />
        </div>
    );
});

AsteroidCard.displayName = "AsteroidCard";