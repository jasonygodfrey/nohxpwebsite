import React from 'react';
import styles from './index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      </div>
      <aside className={styles.sidebar}>
        <button className={styles.sidebarButton}>Button 1</button>
        <button className={styles.sidebarButton}>Button 2</button>
        <button className={styles.sidebarButton}>Button 3</button>
        <button className={styles.sidebarButton}>Button 4</button>
        <button className={styles.sidebarButton}>Button 5</button>
        <button className={styles.sidebarButton}>Button 6</button>
        <button className={styles.sidebarButton}>Button 7</button>
        <button className={styles.sidebarButton}>Button 8</button>
        <button className={styles.sidebarButton}>Button 9</button>
        <button className={styles.sidebarButton}>Button 10</button>
      </aside>
    </div>
  );
};

export default Index;
