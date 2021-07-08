import Link from 'next/link';

import styles from './Navitem.module.css';

export default function Navitem({ href, children }) {
  return (
    <li className={styles.navitem}>
      <Link href={href}>
        <a tabIndex={0} className={styles.link}>
          {children}
        </a>
      </Link>
    </li>
  );
}
