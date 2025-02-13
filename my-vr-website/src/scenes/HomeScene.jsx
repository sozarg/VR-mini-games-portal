import React from 'react';
import 'aframe';

function HomeScene({ navigate }) {
  return (
    <a-scene>
      <a-assets>
        {/* Pre-carga del modelo 3D */}
        <a-asset-item id="warehouse-model" src="/warehouse.glb">
        </a-asset-item>
      </a-assets>

      {/* Modelo 3D de la casa */}
      <a-entity 
        gltf-model="#warehouse-model" 
        position="0 1 -5" 
        rotation="0 0 0" 
        scale="2 2 2">
      </a-entity>

      {/* Portal 1 */}
      <a-box 
        position="-1 1 -3" 
        rotation="0 45 0" 
        color="#4CC3D9" 
        data-portal="1"
        class="clickable portal" 
        event-set__enter="_event: mouseenter; _target: this; color: #FFC65D"
        event-set__leave="_event: mouseleave; _target: this; color: #4CC3D9"
        onClick={() => navigate('firefighter')}
      ></a-box>

      {/* Portal 2 */}
      <a-box 
        position="1 1 -3" 
        rotation="0 45 0" 
        color="#7BC8A4" 
        data-portal="2"
        class="clickable portal" 
        event-set__enter="_event: mouseenter; _target: this; color: #FFC65D"
        event-set__leave="_event: mouseleave; _target: this; color: #7BC8A4"
        onClick={() => alert('Próximamente...')}
      ></a-box>

      {/* Portal 3 */}
      <a-box 
        position="3 1 -3" 
        rotation="0 45 0" 
        color="#FFC65D" 
        data-portal="3"
        class="clickable portal" 
        event-set__enter="_event: mouseenter; _target: this; color: #4CC3D9"
        event-set__leave="_event: mouseleave; _target: this; color: #FFC65D"
        onClick={() => alert('Próximamente...')}
      ></a-box>

      <a-sky color="#ECECEC"></a-sky>
      <a-entity camera look-controls wasd-controls>
        <a-cursor></a-cursor>
      </a-entity>
    </a-scene>
  );
}

export default HomeScene;
