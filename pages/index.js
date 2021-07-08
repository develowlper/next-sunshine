import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSS Art by hello-sunshine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.headline}>Hello Sunshine!</h1>
        <nav className={styles.nav}>
          <ul className={styles.navitems}>
            <li className={styles.navitem}>
              <Link href="/heart">
                <a className={clsx(styles.link, styles['link--leda'])}>
                  <span>Heart {'>'}</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main></main>

      <footer></footer>
    </div>
  );
}
