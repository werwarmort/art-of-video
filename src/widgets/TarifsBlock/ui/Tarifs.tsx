import React from 'react';
import styles from './Tarifs.module.scss';

const TarifsComponent = () => {
  return (
    <div className={styles.tarifsWrapper}>
      <div className={styles.content}>
        <h2 className={styles.tarifsTitle}>Тарифы</h2>
        <div className={styles.tarifsList}>
          <div className={styles.tarifsItem}>
            <div className={styles.tarifsContent}>
              <div className={styles.tarifsContentMainInfo}>
                <h3 className={styles.tarifsItemTitle}>Индивидуальная съемка</h3>
                <p className={styles.tarifsBullets}>
                  - Помощь в подборе образа и места <br />
                  - Помощь в позировании <br />
                  - До 2х часов съемки <br />
                  - До 30 фотографий в ретуши <br />
                  - Все удачные исходники <br />
                  - Срок сдачи до 2х недель <br />
                </p>
              </div>
              <p className={styles.tarifsItemSideInfo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at deleniti
                excepturi ipsum iure numquam perferendis quo repudiandae sit. Amet doloremque eos
                esse itaque maxime nesciunt pariatur quas quo reiciendis.
              </p>
              <div className={styles.tarifsPhoto} />
            </div>
            <button className={styles.tarifsButton}>Заказать съемку</button>
          </div>
          <div className={styles.tarifsItem}>
            <div className={styles.tarifsContent}>
              <div className={styles.tarifsContentMainInfo}>
                <h3 className={styles.tarifsItemTitle}>Индивидуальная съемка</h3>
                <p className={styles.tarifsBullets}>
                  - Помощь в подборе образа и места <br />
                  - Помощь в позировании <br />
                  - До 2х часов съемки <br />
                  - До 30 фотографий в ретуши <br />
                  - Все удачные исходники <br />
                  - Срок сдачи до 2х недель <br />
                </p>
              </div>
              <p className={styles.tarifsItemSideInfo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at deleniti
                excepturi ipsum iure numquam perferendis quo repudiandae sit. Amet doloremque eos
                esse itaque maxime nesciunt pariatur quas quo reiciendis.
              </p>
              <div className={styles.tarifsPhoto} />
            </div>
            <button className={styles.tarifsButton}>Заказать съемку</button>
          </div>
          <div className={styles.tarifsItem}>
            <div className={styles.tarifsContent}>
              <div className={styles.tarifsContentMainInfo}>
                <h3 className={styles.tarifsItemTitle}>Индивидуальная съемка</h3>
                <p className={styles.tarifsBullets}>
                  - Помощь в подборе образа и места <br />
                  - Помощь в позировании <br />
                  - До 2х часов съемки <br />
                  - До 30 фотографий в ретуши <br />
                  - Все удачные исходники <br />
                  - Срок сдачи до 2х недель <br />
                </p>
              </div>
              <p className={styles.tarifsItemSideInfo}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at deleniti
                excepturi ipsum iure numquam perferendis quo repudiandae sit. Amet doloremque eos
                esse itaque maxime nesciunt pariatur quas quo reiciendis.
              </p>
              <div className={styles.tarifsPhoto} />
            </div>
            <button className={styles.tarifsButton}>Заказать съемку</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarifsComponent;
