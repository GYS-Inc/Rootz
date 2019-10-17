
//Action creator
export const SelectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
}; 
