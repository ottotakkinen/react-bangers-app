import React from 'react';

import styles from './MainContainer.module.css';

const MainContainer = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default MainContainer;
