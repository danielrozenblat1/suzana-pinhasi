import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import { ChevronDown } from 'lucide-react';
import LoadingEffect from '../components/loader/Loader';
import image1 from "../images/סוזנה פנחסי ימין.png"
import image2 from "../images/סוזנה פנחסי שמאל.png"
import image3 from "../images/סוזנה פנחסי מרכז.png"

const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    const backgroundImages = [
   image1,image2,image3
    ];

    const loadImage = (imageSrc) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(backgroundImages.map(imageSrc => loadImage(imageSrc)))
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((err) => {
        console.error("Error loading images", err);
        // You might want to set imagesLoaded to true even on error
        // to show the content instead of infinite loading
        setImagesLoaded(true);
      });
  }, []);

  if (!imagesLoaded) {
    return <LoadingEffect />;
  }

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