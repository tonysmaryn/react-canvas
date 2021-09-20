import { useState } from 'react';
import './App.scss';
import DrawingCanvas from "./components/DrawingCanvas/DrawingCanvas";
import RepeatCanvas from './components/RepeatCanvas/RepeatCanvas';

function App() {
  const [images, setImages] = useState([]);

  const addScreen = (image) => {
    setImages([...images, image]);
  }
  return (
    <>
      <DrawingCanvas addScreen={addScreen} images={images} />
      <RepeatCanvas />
    </>
  );
}

export default App;
