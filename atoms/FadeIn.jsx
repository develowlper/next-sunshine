import styles from './FadeIn.module.css';

export default function FadeIn({ children }) {
  return <div className={styles.fadeIn}>{children}</div>;
}
