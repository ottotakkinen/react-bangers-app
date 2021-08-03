import React, { useState, useEffect } from 'react';
import AddSongForm from './components/AddSongForm';
import MainContainer from './components/Layout/MainContainer';
import SongCardList from './components/SongCardList';

const dummySongIds = [
  '3oiwQKGWKirH1H5qbTsYpG',
  '1GvyPmmkOxcrnLBjpgFBPX',
  '4ocvrDYRtLdJVfJRT4ezFS',
];

function App() {
  const [songIds, setSongIds] = useState([]);

  useEffect(() => {
    setSongIds(dummySongIds);
  }, []);

  const addSongId = (id) => {
    setSongIds((prevState) => [...prevState, id]);
  };

  return (
    <div className="App">
      <MainContainer>
        <h1 style={{ color: 'white' }}>#bangersonly</h1>
        <AddSongForm addSongId={addSongId} />
        <SongCardList songIds={songIds} />
      </MainContainer>
    </div>
  );
}

export default App;
