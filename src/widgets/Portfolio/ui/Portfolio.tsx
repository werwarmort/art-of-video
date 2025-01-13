import React from 'react';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.portfolioRoot}>
      <div className={styles.portfolioWrapper}>
        <h1 className={styles.portfolioTitle}>Портфолио</h1>
        <div className={styles.videosWrapper}>
          <div className={styles.video}>
            <iframe
              src="https://player.vimeo.com/video/592925228?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&transparent=0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Artem &amp; Liza / wedding clip"
            />
          </div>

          <div className={styles.video}>
            <div>
              <iframe
                src="https://player.vimeo.com/video/691813018?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&transparent=0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Nikita &amp; Natali / wedding clip"
              ></iframe>
            </div>
          </div>

          <div className={styles.video}>
            <div>
              <iframe
                src="https://player.vimeo.com/video/919346505?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&transparent=0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Dima&amp;Sveta"
              ></iframe>
            </div>
          </div>

          <div className={styles.video}>
            <div>
              <iframe
                src="https://player.vimeo.com/video/1020964146?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&transparent=0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Отчетный_Pulse_prime"
              ></iframe>
            </div>
          </div>
        </div>
        <a
          className={styles.moreVideoLink}
          href="https://vimeo.com/user12013134"
          target="_blank"
          rel="noopener noreferrer"
        >
          Остальные работы
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
