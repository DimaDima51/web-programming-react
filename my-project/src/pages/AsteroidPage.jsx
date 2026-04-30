import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { AsteroidController } from "../AsteroidContoller";
import styles from "./AsteroidPage.module.css";

export const AsteroidPage = () => {
    const { id } = useParams();
    const [asteroid, setAsteroid] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("Не указан идентификатор астероида.");
            setIsLoading(false);
            return;
        }

        AsteroidController.getAsteroidById(id)
            .then((result) => {
                setAsteroid(result);
            })
            .catch(() => {
                setError("Не удалось загрузить данные астероида.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return (
            <>
                <Header />
                <div className={styles.container}>Загрузка...</div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <div className={styles.container}>{error}</div>
                <Footer />
            </>
        );
    }

    if (!asteroid) {
        return null;
    }

    return (
        <>
            <Header />

            <div className={styles.container}>
                <div className={styles.summaryCard}>
                    <div className={styles.summaryTitle}>{asteroid.name}</div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>ID</span>
                        <span className={styles.value}>{asteroid.id}</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Статус</span>
                        <span className={asteroid.isDanger ? styles.badgeDanger : styles.badgeSafe}>
                            {asteroid.isDanger ? "Опасен" : "Безопасен"}
                        </span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Диаметр</span>
                        <span className={styles.value}>{Math.round(asteroid.diameter)} м</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Ближайших приближений</span>
                        <span className={styles.value}>{asteroid.approaches?.length ?? 0}</span>
                    </div>
                </div>

                <div className={styles.title}>Информация об астероиде</div>
                <div className={styles.section}>
                    <div className={styles.row}>
                        <span className={styles.label}>Название</span>
                        <span className={styles.value}>{asteroid.name}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>ID</span>
                        <span className={styles.value}>{asteroid.id}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Диаметр</span>
                        <span className={styles.value}>{Math.round(asteroid.diameter)} м</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Опасность</span>
                        <span className={asteroid.isDanger ? styles.badgeDanger : styles.badgeSafe}>
                            {asteroid.isDanger ? "Опасен" : "Безопасен"}
                        </span>
                    </div>
                </div>

                <div className={styles.title}>Приближения</div>
                {asteroid.approaches?.length ? (
                    asteroid.approaches.map((a, idx) => (
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
                                    <div className={styles.value}>{a.orbiting_body}</div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.section}>Данных о приближениях не найдено.</div>
                )}
            </div>

            <Footer />
        </>
    );
};