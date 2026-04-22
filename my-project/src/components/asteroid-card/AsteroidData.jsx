import styles from "./AsteroidData.module.css";

const getAsteroidBackground = (diameter) => {
    if (diameter > 100 && diameter < 500) {
        return {
            backgroundImage: "url(./asteroid-medium.png)",
            backgroundPosition: "calc(100% - 550px) 0px",
        };
    }

    if (diameter >= 500) {
        return {
            backgroundImage: "url(./asteroid-big.png)",
        };
    }

    return {
        backgroundImage: "url(./asteroid-small.png)",
        backgroundPosition: "calc(100% - 600px) 20px",
    };
};

export const AsteroidData = ({ name, distance, diameter, date, isKilometers }) => {
    return (
        <div className={styles.container} style={{ ...getAsteroidBackground(diameter), backgroundRepeat: "no-repeat" }}>
            <div style={{ backgroundImage: "url(./dino.png)", backgroundRepeat: "no-repeat", marginTop: "auto", marginLeft: "25px", minHeight: "45px" }}></div>

            <div>
                <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>{name}</div>
                <div className={styles.row}>
                    <span>Дата:</span>
                    <span>{date}</span>
                </div>
                <div className={styles.row}>
                    <span>Расстояние:</span>
                    <span>{isKilometers ? `${distance} км` : `${(distance / 164000).toFixed(2)} дист. до Луны`}</span>
                </div>
                <div className={styles.row}>
                    <span>Размер:</span>
                    <span>{diameter} м</span>
                </div>
            </div>
        </div>
    );
}  
