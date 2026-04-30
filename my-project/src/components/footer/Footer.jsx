import styles from './Footer.module.css';

export const Footer = () => {
    return <div className={styles.footer}>
        {new Date().getFullYear()} © Все права и планета защищены
    </div>
}