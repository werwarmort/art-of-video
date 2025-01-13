import React from 'react';
import styles from './HeroComponent.module.scss';

const HeroComponent = () => {
  return (
    <div className={styles.heroComponentRoot}>
      <video className={styles.backgroundVideo} src="/videos/wedding.mp4" autoPlay loop muted />
      <div className={styles.overlay} />
      <nav className={styles.headerMenu}>
        <div>L</div>
        <ul className={styles.menuList}>
          <li className={styles.menuListItem}>Обо мне</li>
          <li className={styles.menuListItem}>Тарифы</li>
          <li className={styles.menuListItem}>Портфолио</li>
          <li className={styles.menuListItem}>Отзывы</li>
          <li className={styles.menuListItem}>Связаться со мной</li>
        </ul>
        <div className={styles.personalInfo}>
          <span className={styles.location}>Воронеж</span>
          <span className={styles.phoneNumber}>+7 (777) 777 77 77</span>
        </div>
      </nav>
      <div className={styles.textBlock}>
        <h2 className={styles.textTitle}>
          Хранитель самых <br /> ярких и теплых моментов
        </h2>
        <h3 className={styles.textSubtitle}>Профессиональный видиограф Александр Ясаков</h3>
      </div>
    </div>
  );
};

export default HeroComponent;
