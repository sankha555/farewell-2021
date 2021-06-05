import './App.css';
import Images from './components/Images/Images';
import Rotate from './components/Rotate/Rotate';
import RotateBackground from './components/RotateBackground/RotateBackground'
import RotateBackground_css from './components/RotateBackground/RotateBackground.css'

import Road from './components/Road/Road';
import image_css from './components/Images/Images.css';
import img_path from './components/Images/Untitled.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        {/* <Images path={img_path} css={image_css}/>    */}
                <RotateBackground/>   

        <Rotate/>
      </div>
  );
}

export default App;
