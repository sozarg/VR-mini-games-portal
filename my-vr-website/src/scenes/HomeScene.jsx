import React from 'react';
import 'aframe';

function HomeScene({ navigate }) {
  const handlePortalClick = (event) => {
    const portal = event.target.getAttribute('data-portal');
    if (portal === '1') {
      navigate('firefighter');
    } else {
      alert('Próximamente...');
    }
  };

  return (
    <a-scene>
      <a-box 
        position="-1 1 -3" 
        rotation="0 45 0" 
        color="#4CC3D9" 
        data-portal="1"
        class="clickable"
        event-set__enter="_event: mouseenter; color: #FFC65D"
        event-set__leave="_event: mouseleave; color: #4CC3D9"
        onClick={handlePortalClick}
      ></a-box>
      <a-box 
        position="1 1 -3" 
        rotation="0 45 0" 
        color="#7BC8A4" 
        data-portal="2"
        class="clickable"
        event-set__enter="_event: mouseenter; color: #FFC65D"
        event-set__leave="_event: mouseleave; color: #7BC8A4"
        onClick={handlePortalClick}
      ></a-box>
      <a-box 
        position="3 1 -3" 
        rotation="0 45 0" 
        color="#FFC65D" 
        data-portal="3"
        class="clickable"
        event-set__enter="_event: mouseenter; color: #4CC3D9"
        event-set__leave="_event: mouseleave; color: #FFC65D"
        onClick={handlePortalClick}
      ></a-box>
      <a-sky color="#ECECEC"></a-sky>
      <a-entity camera look-controls wasd-controls>
        <a-cursor></a-cursor>
      </a-entity>
    </a-scene>
  );
}

export default HomeScene;
