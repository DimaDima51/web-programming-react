import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { AsteroidController } from "../AsteroidContoller";
import styles from "./AsteroidPage.module.css";

export const AsteroidPage = () => {
    const { id } = useParams();
    const [asteroid, setAsteroid] = useState(null);

    useEffect(() => {
        if (id) {
            AsteroidController.getAsteroidById(id)
                .then(setAsteroid)
                .catch(err => console.error(err));
        }
    }, [id]);

    if (!asteroid) return;

    return (
        <>
            <Header />

            <div className={styles.container}>
                <div className={styles.title}>{asteroid.name}</div>

                <div className={styles.section}>
                    <div className={styles.row}>
                        <span className={styles.label}>ID</span>
                        <span className={styles.value}>{asteroid.id}</span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.label}>Опасность</span>
                        <span className={asteroid.isDanger ? styles.badgeDanger : styles.badgeSafe}>
                            {asteroid.isDanger ? "Опасен" : "Безопасен"}
                        </span>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.label}>Диаметр</span>
                        <span className={styles.value}>{asteroid.diameter} м</span>
                    </div>
                </div>

                <div className={styles.title}>Приближения</div>

                {asteroid.approaches.map((a, idx) => (
                    <div key={idx} className={styles.approach}>

                        <div className={styles.row}>
                            <span className={styles.label}>Дата</span>
                            <span className={styles.value}>{a.close_approach_date}</span>
                        </div>

                        <div className={styles.row}>
                            <span className={styles.label}>Полная дата</span>
                            <span className={styles.value}>{a.close_approach_date_full}</span>
                        </div>

                        <div className={styles.grid}>
                            <div className={styles.block}>
                                <div className={styles.label}>Дистанция (км)</div>
                                <div className={styles.value}>
                                    {parseFloat(a.miss_distance.kilometers).toFixed(2)}
                                </div>
                            </div>

                            <div className={styles.block}>
                                <div className={styles.label}>Скорость (км/ч)</div>
                                <div className={styles.value}>
                                    {parseFloat(a.relative_velocity.kilometers_per_hour).toFixed(0)}
                                </div>
                            </div>

                            <div className={styles.block}>
                                <div className={styles.label}>Орбита</div>
                                <div className={styles.value}>
                                    {a.orbiting_body}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
};