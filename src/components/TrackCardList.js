import React from 'react';
import TrackCard from './TrackCard';

const TrackCardList = ({ tracks }) => {
  const sortedTracks = tracks.sort((a, b) =>
    b.createdAt > a.createdAt ? 1 : -1
  );
  return (
    <React.Fragment>
      {sortedTracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </React.Fragment>
  );
};

export default TrackCardList;
