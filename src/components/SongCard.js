import React from 'react';

import styles from './SongCard.module.css';

const SongCard = ({ songId }) => {
  return (
    <div className={styles.container}>
      <iframe
        title={songId}
        src={`https://open.spotify.com/embed/track/${songId}`}
        width="500"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <div className={styles['info-container']}>
        <span className={styles.username}>Uploaded by: username</span>
        <span>1h ago</span>
      </div>
    </div>
  );
};

export default SongCard;
