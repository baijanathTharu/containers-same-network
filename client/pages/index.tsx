import React, { useState } from 'react';

import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const BACKEND_URI =
  process.env.NEXT_PUBLIC_BACKEND_URI || 'http://localhost:4444';

const Home: NextPage = () => {
  const [name, setName] = useState('stranger');
  const [message, setMessage] = useState(`Hello, ${name}`);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`${BACKEND_URI}/${name}`);
      const data = await res.json();
      setMessage(data.message);
      setName('');
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>{message}</h2>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='your name'
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />

          <button type='submit'>{loading ? 'Submitting...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
