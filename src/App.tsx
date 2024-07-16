import React from 'react';
import './App.css';
import VideoConference from './components/video-conference/VideoConference';

function App() {
  return (
    <div className="App">
      <VideoConference videoConferenceId={1234} />
    </div>
  );
}


export default App;
