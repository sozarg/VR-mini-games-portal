import React, { useState } from 'react';
import HomeScene from './components/HomeScene';
import FirefighterGame from './components/FirefighterGame';

function App() {
  const [scene, setScene] = useState('home');

  const navigate = (scene) => {
    setScene(scene);
  };

  return (
    <>
      {scene === 'home' && <HomeScene navigate={navigate} />}
      {scene === 'firefighter' && <FirefighterGame navigate={navigate} />}
    </>
  );
}

export default App;
