import React from 'react';
import 'aframe';

function FirefighterGame({ navigate }) {
  // Manejo del clic en el portal para regresar a la escena principal
  const handlePortalClick = () => {
    navigate('home');
  };

  return (
    <a-scene>
      {/* Portal para volver a casa */}
      <a-box 
        position="0 1 -3" 
        rotation="0 0 0" 
        color="#007BFF" 
        depth="0.1" 
        height="0.5" 
        width="2"
        class="clickable portal"
        event-set__enter="_event: mouseenter; _target: this; color: #0056b3"
        event-set__leave="_event: mouseleave; _target: this; color: #007BFF"
        onClick={handlePortalClick}
      >
        <a-text 
          value="Volver a casa" 
          color="white" 
          align="center"
          position="0 0.1 0.1"
        ></a-text>
      </a-box>

      <a-sky color="#ECECEC"></a-sky>
      <a-entity camera look-controls wasd-controls>
        <a-cursor></a-cursor>
      </a-entity>
    </a-scene>
  );
}

export default FirefighterGame;
