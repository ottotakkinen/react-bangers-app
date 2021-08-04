import React from 'react';

import styles from './TrackCard.module.css';

const getTimeFromCreation = (createdAtISO) => {
  const createdAt = Date.parse(createdAtISO);
  const timeNow = Date.parse(new Date().toISOString());
  const timeDif = timeNow - createdAt;

  const seconds = timeDif / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  let time = 'Just now';
  if (minutes < 60 && minutes >= 1) {
    time = `${Math.floor(minutes)} minute${
      Math.floor(minutes) > 1 ? 's' : ''
    } ago`;
  } else if (hours < 24 && hours >= 1) {
    time = `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? 's' : ''} ago`;
  } else if (days >= 1) {
    time = `${Math.floor(days)} day${Math.floor(days) > 1 ? 's' : ''} ago`;
  }
  return time;
};

const TrackCard = ({ track }) => {
  const time = getTimeFromCreation(track.createdAt);
  return (
    <div className={styles.container}>
      <iframe
        title={track.spotifyId}
        src={`https://open.spotify.com/embed/track/${track.spotifyId}`}
        width="500"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <div className={styles['info-container']}>
        <span className={styles.username}>Added by: {track.user}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default TrackCard;
