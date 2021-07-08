import AnimatedHello from '../molecules/AnimatedHello';
import Navbar from '../molecules/Navbar';
import styles from './Sidebar.module.css';
export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <AnimatedHello />
      <Navbar />
    </aside>
  );
}
