import React from 'react';
import Dropdown from './Dropdown';

import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.main}>

      <div className={styles.navbar}>
        <div className={styles.logo} tabIndex='0'>Logo</div>
        <div className={styles.navlinks}>
          <a href='#'>Link A</a>
          <a href='#'>Link B</a>
          <a href='#'>Link C</a>

          <Dropdown />
        </div>
      </div>

      <div className={styles.body}>
        <a
          href='https://medium.com/@marshalmurphy'
          target='_blank'> something else to Focus on...
        </a>
      </div>
    </div>
  );
}

export default App;
