import { NavLink } from 'react-router';
import { memo } from 'react';
import styles from './Header.module.css';

export const Header = memo(() => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.left}>
                    <div style={{ fontWeight: 'bold', fontSize: '46px' }}>ARMAGGEDON V</div>
                    <div style={{ fontSize: '20px' }}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
                </div>
                <div className={styles.right}>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Астероиды</NavLink>
                    <NavLink to="/destroyment" className={({ isActive }) => isActive ? styles.active : ''}>Уничтожение</NavLink>
                </div>
            </header>
        </div>
    );
});

Header.displayName = "Header";