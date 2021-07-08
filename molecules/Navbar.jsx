import { FiHome, FiHeart } from 'react-icons/fi';
import Navitem from '../atoms/Navitem';
import styles from './Navbar.module.css';
export default function Navbar({ children }) {
  return (
    <nav>
      <ul className={styles.navitems}>
        <Navitem href="/">
          <FiHome />
          <span>Home</span>
        </Navitem>
        <Navitem href="/heart">
          <FiHeart />
          <span>Heart</span>
        </Navitem>
      </ul>
    </nav>
  );
}
