import React from 'react';
import logo from './logo.svg';
import './App.css';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import Dashboard from './components/Dashboard';
import Maps from './components/Maps'


function App() {
  return (
    <Dashboard />
    // <div className="ui container grid">
    //   <div className="ui row">
    //     <div className="column eight wide">
    //       <SongList />
    //     </div>
    //     <div className="column eight wide">
    //       <SongDetail />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;


// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React 2
//     </a>
//   </header>
// </div>
