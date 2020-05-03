import React from 'react';
import Dropdown from './Dropdown';

import styles from './app.module.css';

const App = () => {
  return (
    <main className={styles.main}>

      <nav className={styles.navbar}>
        <div className={styles.logo} tabIndex='0'>Logo</div>
        <div className={styles.navlinks}>
          <a href='#'>Link A</a>
          <a href='#'>Link B</a>
          <a href='#'>Link C</a>

          <Dropdown />
        </div>
      </nav>

      <div className={styles.body}>
      </div>
    </main>
  );
}

export default App;
