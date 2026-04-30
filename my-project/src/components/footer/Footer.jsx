import styles from './Footer.module.css';
import { memo } from 'react';

export const Footer = memo(() => {
    return (
        <div className={styles.footer}>
            <div className={styles.inner}>
                {new Date().getFullYear()} © Все права и планета защищены
            </div>
        </div>
    );
});

Footer.displayName = "Footer";