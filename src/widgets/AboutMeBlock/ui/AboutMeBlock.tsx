import React from 'react';
import styles from './AboutMeBlock.module.scss';
import Image from 'next/image';

const AboutMeBlock = () => {
  return (
    <div className={styles.aboutMeBlockWrapper}>
      <div className={styles.content}>
        <h2 className={styles.aboutMeTitle}>Обо мне</h2>
        <div className={styles.aboutMeInfo}>
          <div className={styles.firstBlock}>
            <p className={styles.firstText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam animi
              esse impedit labore magni nesciunt nihil, non nulla, optio pariatur porro sunt tempore
              vitae? A aliquid amet asperiores beatae consequuntur dignissimos dolore dolorem, earum
              ex, explicabo facilis harum illum impedit incidunt ipsa ipsam labore laboriosam
              laborum minima mollitia neque, omnis optio quae quasi quidem quis rem rerum sint
              soluta tempore tenetur veritatis voluptate voluptatum. Accusantium ad adipisci animi
              at, aut blanditiis consequuntur doloribus labore laborum maxime modi. at, aut at, aut
              blanditiis consequuntur doloribus labore laborum maxime modi. asperiores beatae
              consequuntur dignissimos dolore dolorem, impedit incidunt
            </p>
            <Image
              className={styles.aboutMePhoto1}
              src="/aboutMeBlock/about1.webp"
              alt="me1"
              width={1000}
              height={1000}
            />
            {/*<div className={styles.aboutMePhoto1}>photo</div>*/}
            <div>
              <Image
                className={styles.landscape}
                src="/aboutMeBlock/vor1.webp"
                alt="me1"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className={styles.secondBlock}>
            <div className={styles.secondLandscapeWrapper}>
              <Image
                className={styles.landscape}
                src="/aboutMeBlock/vor2.webp"
                alt="me1"
                width={1000}
                height={1000}
              />
            </div>
            <p className={styles.secondText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam animi
              esse impedit labore magni nesciunt nihil, non nulla, optio pariatur porro sunt tempore
              vitae? A aliquid amet asperiores beatae consequuntur dignissimos dolore dolorem, earum
              ex, explicabo facilis harum illum impedit incidunt ipsa ipsam labore laboriosam
              laborum minima mollitia neque, omnis optio quae quasi quidem quis rem rerum sint
              soluta tempore tenetur veritatis voluptate voluptatum. Accusantium ad adipisci animi
              at, aut blanditiis consequuntur doloribus labore laborum maxime modi. at, aut at, aut
              blanditiis consequuntur doloribus labore laborum maxime modi. asperiores beatae
              consequuntur dignissimos dolore dolorem, impedit incidunt
            </p>
            <Image
              className={styles.aboutMePhoto1}
              src="/aboutMeBlock/about2.webp"
              alt="me1"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeBlock;
