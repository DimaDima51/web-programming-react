import { AsteroidAction } from "./AsteroidAction";
import styles from "./AsteroidCard.module.css";
import { AsteroidData } from "./AsteroidData";
import { Link } from "react-router-dom";

export const AsteroidCard = (props) => {
    const { id, isDanger, name, distance, diameter, date, isKilometers } = props;

    return (
        <div className={isDanger ? styles.containerDanger : styles.container}>

            <Link to={`asteroids/${id}`}>
                <AsteroidData name={name} distance={distance} diameter={diameter} date={date} isKilometers={isKilometers} />
            </Link>

            <AsteroidAction id={id} name={name} isDanger={isDanger} />
        </div>
    );
};