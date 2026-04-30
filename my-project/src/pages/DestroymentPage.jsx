import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { useContext } from "react";
import { AppContext } from "../App";
import { AsteroidCardContainer } from "../components/asteroid-card/AsteroidCardContainer";
import styles from "./DestroymentPage.module.css";

export const DestroymentPage = () => {
    const { destroyList } = useContext(AppContext);

    const emptyState = <div className={styles.emptyMessage}>Нет астероидов для уничтожения! «Отлично, ребята, ставьте чайник!»</div>;

    return (
        <div className={styles.container}>
            <Header />

            <div>
                <h2 className={styles.title}>Список на уничтожение</h2>
                {destroyList.length === 0 ? (
                    emptyState
                ) : (
                    destroyList.map((item) => ( <AsteroidCardContainer key={item.id} {...item} isKilometers={true} /> ))
                )}
            </div>

            <Footer />
        </div>
    );
};