import clsx from 'clsx';
import Head from 'next/head';
import styles from '../styles/Heart.module.css';

export default function Heart({}) {
  return (
    <div>
      <Head>
        <title>i love sunshine</title>
      </Head>
      {/* thanks to https://css-tricks.com/hearts-in-html-and-css/ */}
      <div className={styles.loveyou}>
        <span style={{ margin: '0 16px', fontSize: '5rem' }}>I</span>
        <svg className={styles.svgheart} viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
        <span style={{ marginLeft: '16px' }} className={styles.sun}></span>
      </div>
    </div>
  );
}
