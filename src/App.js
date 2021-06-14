import React from "react-transition-group";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./containers/Layout";
import "./App.css";
import Road from "./components/Road/Road";
import YashRoad from './components/Seniors/Yash/YashRoad'
import NiravRoad from './components/Seniors/Nirav/NiravRoad'
import AyushRoad from './components/Seniors/Ayush/AyushRoad'
import AbhijeetRoad from './components/Seniors/Abhijeet/AbhijeetRoad'
import AtmadeepRoad from './components/Seniors/Atmadeep/AtmadeepRoad'
import RahilRoad from './components/Seniors/Rahil/RahilRoad'
import NikhilRoad from './components/Seniors/Nikhil/NikhilRoad'
import VishnupriyaRoad from './components/Seniors/Vishnupriya/VishnupriyaRoad'
import SparshRoad from './components/Seniors/Sparsh/SparshRoad'

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
    <div className="App">
      {/* <Layout /> */}
     <Switch>
      <Route path='/Nirav' component={NiravRoad}/>
      <Route path='/Sparsh' component={SparshRoad}/>
      <Route path='/Abhijeet' component={AbhijeetRoad}/>
      <Route path='/Atmadeep' component={AtmadeepRoad}/>
      <Route path='/Vishnupriya' component={VishnupriyaRoad}/>
      <Route path='/Yash' component={YashRoad}/>
      <Route path='/Rahil' component={RahilRoad}/>
      <Route path='/Ayush' component={AyushRoad}/>
      <Route path='/Nikhil' component={NikhilRoad}/>
      <Route path='/'  exact component={Layout}/>
      </Switch>
      

    </div>
    </BrowserRouter>
    
  );
}

export default App;
