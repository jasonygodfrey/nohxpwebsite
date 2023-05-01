import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/logoknife.png"
          alt="Logo"
          width={10}
          height={10}
          layout="responsive"
        />
      </div>
      <div className={styles.title}>
        <Image
          src="/NOHXPETITLE.png"
          alt="Title"
          width={500}
          height={100}
          layout="responsive"
        />
      </div>
      <div className={styles.buttonRowContainer}>
        <div className={styles.imageContainer}>
        <img
            src="/IMG_0069-3.png"
            alt="Image"
            width={500}
            height={500}
            className={`${styles.image} ${styles.centerImage}`} // Add the centerImage class here
          />
        </div>
        {
  /* 
  <div className={styles.buttonRow}>
    <button className={`${styles.button} ${styles.bottomButton}`}>Button 1A</button>
    <button className={`${styles.button} ${styles.bottomButton}`}>Button 2A</button>
    <button className={`${styles.button} ${styles.bottomButton}`}>Button 3A</button>
    <button className={`${styles.button} ${styles.bottomButton}`}>Button 4A</button>
    <button className={`${styles.button} ${styles.bottomButton}`}>Button 5A</button>
    <button className={`${styles.button} ${styles.bottomButton}`}>Button 6A</button>
  </div>
  */
}

      </div>
      <aside className={styles.sidebar}>
      <a
  href="https://www.instagram.com/nohxpeco/"
  target="_blank"
  rel="noopener noreferrer"
  className={`${styles.sidebarLink} ${styles.instagramLink} link`}
>
  <button className={`${styles.sidebarButton} ${styles.button1b} ${styles.socialButton}`}><span style={{ textAlign: 'center' }}>INSTAGRAM</span></button>
</a>

<a
  href="https://twitter.com/NoHxpeCo"
  target="_blank"
  rel="noopener noreferrer"
  className={`${styles.sidebarLink} ${styles.twitterLink} link`}
>
  <button className={`${styles.sidebarButton} ${styles.button4b} ${styles.socialButton}`}> <span style={{ textAlign: 'center' }}>TWITTER</span></button>
</a>


        <button className={`${styles.sidebarButton} ${styles.button9b}`}>
        <span style={{ textAlign: 'center' }}>TBA</span>
          </button>

      </aside>
    </div>
  );
};

export default Index;
