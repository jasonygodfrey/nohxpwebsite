import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={10}
          height={10}
          layout="responsive"
        />
      </div>
      <div className={styles.buttonRowContainer}>
        <div className={styles.buttonRow}>
          <button className={styles.button}>Button 1A</button>
          <button className={styles.button}>Button 2A</button>
          <button className={styles.button}>Button 3A</button>
        </div>
        <div className={styles.buttonRow}>
          <button className={styles.button}>Button 4A</button>
          <button className={styles.button}>Button 5A</button>
          <button className={styles.button}>Button 6A</button>
        </div>
      </div>
      <aside className={styles.sidebar}>
        <button className={styles.sidebarButton}>Button 1B</button>
        <button className={styles.sidebarButton}>Button 2B</button>
        <button className={styles.sidebarButton}>Button 3B</button>
        <button className={styles.sidebarButton}>Button 4B</button>
        <button className={styles.sidebarButton}>Button 5B</button>
        <button className={styles.sidebarButton}>Button 6B</button>
        <button className={styles.sidebarButton}>Button 7B</button>
        <button className={styles.sidebarButton}>Button 8B</button>
        <button className={styles.sidebarButton}>Button 9B</button>
        <button className={styles.sidebarButton}>Button 10B</button>
      </aside>
    </div>
  );
};

export default Index;