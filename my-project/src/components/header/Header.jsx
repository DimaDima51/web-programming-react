import { NavLink } from 'react-router';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.left}>
                    <div style={{ fontWeight: 'bold', fontSize: '36px' }}>ARMAGGEDON V</div>
                    <div style={{ fontSize: '16px' }}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
                </div>
                <div className={styles.right}>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Астероиды</NavLink>
                    <NavLink to="/destroyment" className={({ isActive }) => isActive ? styles.active : ''}>Уничтожение</NavLink>
                </div>
            </header>
        </div>
    );
};