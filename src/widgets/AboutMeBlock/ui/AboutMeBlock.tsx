import React from 'react';
import styles from './AboutMeBlock.module.scss';

const AboutMeBlock = () => {
  return (
    <div className={styles.AboutMeBlockWrapper}>
      <div className={styles.content}>
        <h2>Обо мне</h2>
        <div className={styles.aboutMeInfo}>
          <div className={styles.firstBlock}>
            <p className={styles.firstText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam animi
              esse impedit labore magni nesciunt nihil, non nulla, optio pariatur porro sunt tempore
              vitae? A aliquid amet asperiores beatae consequuntur dignissimos dolore dolorem, earum
              ex, explicabo facilis harum illum impedit incidunt ipsa ipsam labore laboriosam
              laborum minima mollitia neque, omnis optio quae quasi quidem quis rem rerum sint
              soluta tempore tenetur veritatis voluptate voluptatum. Accusantium ad adipisci animi
              at, aut blanditiis consequuntur doloribus labore laborum maxime modi.
            </p>
            <div>photo</div>
            <div>photoFull</div>
          </div>
          <div className={styles.secondBlock}>
            <div>photoFull</div>
            <div>text</div>
            <div>photoBottom</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeBlock;
