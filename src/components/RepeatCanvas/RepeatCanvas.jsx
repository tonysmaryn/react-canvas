import React, { useRef } from 'react';
import Button from '../Button/Button';
import './RepeatCanvas.scss';

const RepeatCanvas = ({ images }) => {
  const canvasRef = useRef(null);
  let currentImage = 0;

  const insertHandler = () => {
    if (currentImage === images.length - 1) {
      return;
    }
    currentImage++;
    const context = canvasRef.current.getContext('2d');
    loadImg(context);
  };

  const deleteHandler = () => {
    if (currentImage === 0) {
      return;
    }
    currentImage--;
    const context = canvasRef.current.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    loadImg(context);
  };

  const animationHandler = () => {
    if (currentImage === images.length - 1) {
      return;
    }
    const context = canvasRef.current.getContext('2d');
    const timer = setInterval(() => {
      currentImage++;
      loadImg(context);
      if (currentImage === images.length - 1) clearInterval(timer);
    }, 700);
  };

  const loadImg = (context) => {
    const img = new Image();
    img.src = images[currentImage];
    img.onload = () => context.drawImage(img, 0, 0);
  };

  return (
    <div className="container">
      <canvas width="600" height="700" ref={canvasRef} />
      <div className="toolbar">
        <Button title="Добавить" handler={insertHandler} />
        <Button title="Удалить" handler={deleteHandler} />
        <Button title="Дорисовать" handler={animationHandler} />
      </div>
    </div>
  );
};

export default RepeatCanvas;
