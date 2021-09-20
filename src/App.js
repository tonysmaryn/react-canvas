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
    <div className='wrapper'>
      <DrawingCanvas addScreen={addScreen} images={images} />
      <RepeatCanvas images={images} />
    </div>
  );
}

export default App;
