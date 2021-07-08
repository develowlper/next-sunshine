import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';
import styles from '../styles/Home.module.css';
import Hello from '../atoms/Hello';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSS Art by hello-sunshine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Welcome!</h2>
    </div>
  );
}
