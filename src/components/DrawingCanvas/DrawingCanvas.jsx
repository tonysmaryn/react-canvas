import React, { useEffect, useRef, useState } from 'react';

const DrawingCanvas = ({ addScreen, images }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    contextRef.current = ctx;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    if (images.length === 0) {
      const img = canvasRef.current.toDataURL();
      addScreen(img);
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    const img = canvasRef.current.toDataURL();
    addScreen(img);
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <>
      <canvas
        width="600"
        height="900"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
      />
    </>
  );
};

export default DrawingCanvas;
