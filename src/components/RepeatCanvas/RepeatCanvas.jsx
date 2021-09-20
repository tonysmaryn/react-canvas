import React, { useRef } from 'react';

const RepeatCanvas = () => {
  const canvasRef = useRef(null);
  return (
    <>
      <canvas width="600" height="900" ref={canvasRef} />
    </>
  );
};

export default RepeatCanvas;
