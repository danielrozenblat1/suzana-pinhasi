import React from 'react';
import styles from './FirstScreen.module.css';
import { ChevronDown } from 'lucide-react';
const FirstScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`} />
        <div className={`${styles.backgroundImage} ${styles.centerImage}`} />
        <div className={`${styles.backgroundImage} ${styles.rightImage}`} />
      </div>
      
      <div className={styles.contentBox}>
        <div className={styles.glowingBorder} />
        <div className={styles.decorBorder}>
          <div className={styles.innerContent}>
            <h1 className={styles.mainTitle}>SUZANA PINHASI</h1>
            <div className={styles.separator}>
              <div className={styles.decorLine} />
              <div className={styles.decorDiamond} />
              <div className={styles.decorLine} />
            </div>
            <h3 className={styles.subTitle}>Heart Of Beauty</h3>
          </div>
          <div className={styles.arrowContainer}>
            <ChevronDown className={styles.arrow} size={38} strokeWidth={1.5}/>
          </div>
        </div>
     
      </div>
   
    </div>
  );
};

export default FirstScreen;