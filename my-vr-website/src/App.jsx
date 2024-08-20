import React, { useState } from 'react';
import HomeScene from './scenes/HomeScene';
import FirefighterGame from './scenes/FirefighterGame';

function App() {
  const [currentScene, setCurrentScene] = useState('home');

  const navigate = (scene) => {
    setCurrentScene(scene);
  };

  return (
    <>
      {currentScene === 'home' && <HomeScene navigate={navigate} />}
      {currentScene === 'firefighter' && <FirefighterGame navigate={navigate} />}
    </>
  );
}

export default App;
