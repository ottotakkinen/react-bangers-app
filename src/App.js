import React, { useState, useEffect } from 'react';
import AddTrackForm from './components/AddTrackForm';
import MainContainer from './components/Layout/MainContainer';
import TrackCardList from './components/TrackCardList';

import trackService from './services/tracks';

// const dummyTracks = [
//   { id: '3oiwQKGWKirH1H5qbTsYpG', user: 'anonymous' },
//   { id: '1GvyPmmkOxcrnLBjpgFBPX', user: 'anonymous' },
//   { id: '4ocvrDYRtLdJVfJRT4ezFS', user: 'anonymous' },
// ];

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    trackService.getAll().then((res) => setTracks(res));
    // setTracks(dummyTracks);
  }, []);

  const addTrack = async (spotifyId, user = 'anonymous') => {
    // setTracks((prevState) => [...prevState, { spotifyId, user }]);
    const track = { spotifyId, user };
    const returnedTrack = await trackService.create(track);
    setTracks((prevState) => [...prevState, returnedTrack]);
  };

  return (
    <div className="App">
      <MainContainer>
        <h1 style={{ color: 'white' }}>#bangerthursday</h1>
        <AddTrackForm addTrack={addTrack} />
        <TrackCardList tracks={tracks} />
      </MainContainer>
    </div>
  );
}

export default App;
