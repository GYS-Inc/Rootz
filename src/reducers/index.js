import { combineReducers } from 'redux';

const SongsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'Macarena', duration: '2:30'},
    { title: 'All Star', duration: '3:15'},
    { title: 'I want it that Way', duration: '1:45'},
  ];
};


const SelectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: SongsReducer,
  selectedSong: SelectedSongReducer
});
