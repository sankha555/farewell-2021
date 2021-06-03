import './App.css';
import Images from './components/Images/Images';
import Road from './components/Road/Road';
import image_css from './components/Images/Images.css';
const path = './components/Images/Untitled.jpg';

function App() {  
  return (
    <div className="App">
      <Images css={image_css} path={path}/>
    </div>
  );
}

export default App;
