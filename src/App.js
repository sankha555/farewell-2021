import './App.css';
import Images from './components/Images/Images';
import Road from './components/Road/Road';
import css from './components/Images/Images.css';

function App() {
  return (
    <div className="App">
      <Images css={css}/>
    </div>
  );
}

export default App;
