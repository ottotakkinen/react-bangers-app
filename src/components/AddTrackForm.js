import React, { useState } from 'react';

import styles from './AddTrackForm.module.css';

const getIdFromLink = (link) => {
  const idSplitBySlash = link.split('?')[0].split('/');
  return idSplitBySlash[idSplitBySlash.length - 1];
};

const AddTrackForm = ({ addTrack }) => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');

  // example link:
  // https://open.spotify.com/track/2w2WGSwcfSoZMpA9NKI2lj?si=525228e1bc994060
  const [link, setLink] = useState('');

  const resetForm = () => {
    setUsername('');
    setLink('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!username) {
    //   console.log('username cant be empty');
    //   return;
    // }

    if (!link.includes('https://open.spotify.com/track/')) {
      console.log('link invalid');
      return;
    }

    const spotifyId = getIdFromLink(link);
    addTrack(spotifyId, username);

    resetForm();
    setShow(false);
  };

  const handleCancel = () => {
    resetForm();
    setShow(false);
  };

  return (
    <React.Fragment>
      {!show && <button onClick={() => setShow(true)}>Add song</button>}
      {show && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="username">username</label>
            <input
              id="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="">
            <label htmlFor="link">spotify link</label>
            <input
              id="link"
              type="text"
              onChange={(e) => setLink(e.target.value)}
              value={link}
            />
          </div>
          <button>Add</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )}
    </React.Fragment>
  );
};

export default AddTrackForm;
