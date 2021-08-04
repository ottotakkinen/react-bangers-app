import React from 'react';

import styles from './TrackCard.module.css';

const TrackCard = ({ spotifyId, user }) => {
  return (
    <div className={styles.container}>
      <iframe
        title={spotifyId}
        src={`https://open.spotify.com/embed/track/${spotifyId}`}
        width="500"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <div className={styles['info-container']}>
        <span className={styles.username}>Added by: {user}</span>
        <span>Some time ago</span>
      </div>
    </div>
  );
};

export default TrackCard;
