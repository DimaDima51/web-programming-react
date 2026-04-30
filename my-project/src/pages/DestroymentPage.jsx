import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { useContext } from "react";
import { AppContext } from "../App";

export const DestroymentPage = () => {

    const { destroyList } = useContext(AppContext);

    const emptyState = <div>Нет астероидов для уничтожения</div>;

    return (
        <>
            <Header />

            <div>
                <h2>Список на уничтожение</h2>
                {destroyList.length === 0 ? emptyState : destroyList.map(item => (<div key={item.id}>{item.name}</div>))}
            </div>

            <Footer />
        </>
    );
};