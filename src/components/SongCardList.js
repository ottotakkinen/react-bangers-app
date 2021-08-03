import React from 'react';
import SongCard from './SongCard';

const SongCardList = ({ songIds }) => {
  return (
    <React.Fragment>
      {songIds.map((songId) => (
        <SongCard key={songId} songId={songId} />
      ))}
    </React.Fragment>
  );
};

export default SongCardList;
