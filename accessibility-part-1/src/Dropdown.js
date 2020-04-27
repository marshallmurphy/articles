import React, { useState } from 'react';
import styles from './dropdown.module.css';

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <button>
        Dropdown
        <div className={styles.caretDown}>&#94;</div>
      </button>
    </div>
  )
}

export default Dropdown;
