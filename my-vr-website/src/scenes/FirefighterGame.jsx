import React from 'react';
import 'aframe';

function FirefighterGame({ navigate }) {
  return (
    <a-scene>
      <a-box position="0 1 -3" rotation="0 45 0" color="#FF6347"></a-box>
      <a-cylinder position="1 1 -3" rotation="0 0 0" color="#8B4513" height="2" radius="0.2"></a-cylinder>
      <a-sky color="#ECECEC"></a-sky>
      <a-entity camera look-controls wasd-controls>
        <a-cursor></a-cursor>
      </a-entity>
      <a-entity 
        position="0 2 -4" 
        geometry="primitive: plane; height: 0.5; width: 2"
        material="color: #007BFF; opacity: 0.8"
        text="value: Volver a casa; color: white; align: center"
        class="clickable"
        event-set__enter="_event: mouseenter; color: #0056b3"
        event-set__leave="_event: mouseleave; color: #007BFF"
        onClick={() => navigate('home')}
      ></a-entity>
    </a-scene>
  );
}

export default FirefighterGame;
