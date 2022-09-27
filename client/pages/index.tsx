import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const BACKEND_URI =
  process.env.NEXT_PUBLIC_BACKEND_URI || 'http://localhost:4444';

const Home: NextPage = () => {
  const [name, setName] = useState('stranger');
  const [message, setMessage] = useState(`Hello, ${name}`);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch(`${BACKEND_URI}/${name}`);
        const data = await res.json();
        setMessage(data.message);
      } catch (error: any) {
        setMessage(error.message);
      }
    };

    fetchMessage();
  }, []);

  return <div className={styles.container}>{message}</div>;
};

export default Home;
