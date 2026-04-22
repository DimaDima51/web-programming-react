import { AsteroidAction } from "./AsteroidAction";
import styles from "./AsteroidCard.module.css";
import { AsteroidData } from "./AsteroidData";
import { Link } from "react-router-dom";

export const AsteroidCard = (props) => {

    const { id, isDanger, name, distance, diameter, date, isKilometers } = props;

    return (

        <Link to={`asteroids/${id}`}>

            <div className={isDanger ? styles.containerDanger : styles.container}>
                <AsteroidData name={name} distance={distance} diameter={diameter} date={date} isKilometers={isKilometers} />
                <AsteroidAction isDanger={isDanger} />
            </div>

        </Link>
    );
}