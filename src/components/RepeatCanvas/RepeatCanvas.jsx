import React, { useRef } from 'react';

const RepeatCanvas = ({ images }) => {
  const canvasRef = useRef(null);
  let currentImage = 0;

  const insertHandler = () => {
    currentImage++;
    const context = canvasRef.current.getContext('2d');
    loadImg(context);
  };

  const deleteHandler = () => {
    currentImage--;
    const context = canvasRef.current.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    loadImg(context);
  };

  const loadImg = (context) => {
    const img = new Image();
    img.src = images[currentImage];
    img.onload = () => context.drawImage(img, 0, 0);
  };

  return (
    <>
      <canvas width="600" height="900" ref={canvasRef} />
      <button onClick={() => insertHandler()}>Добавить</button>
      <button onClick={() => deleteHandler()}>Удалить</button>
    </>
  );
};

export default RepeatCanvas;
