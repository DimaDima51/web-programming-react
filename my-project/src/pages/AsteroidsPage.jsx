import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { AsteroidsList } from "../components/asteroids-list/AsteroidsList";
import styles from "./AsteroidsPage.module.css";

export const AsteroidsPage = () => {
    return (
    <div className = {styles.container}>
        <Header />
        <AsteroidsList />
        <Footer />
    </div>
    );
}