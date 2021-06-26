import React from "react-transition-group";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout";
import YashRoad from './components/Seniors/Yash/YashRoad'
import NiravRoad from './components/Seniors/Nirav/NiravRoad'
import AyushRoad from './components/Seniors/Ayush/AyushRoad'
import AbhijeetRoad from './components/Seniors/Abhijeet/AbhijeetRoad'
import AtmadeepRoad from './components/Seniors/Atmadeep/AtmadeepRoad'
import RahilRoad from './components/Seniors/Rahil/RahilRoad'
import NikhilRoad from './components/Seniors/Nikhil/NikhilRoad'
import VishnupriyaRoad from './components/Seniors/Vishnupriya/VishnupriyaRoad'
import SparshRoad from './components/Seniors/Sparsh/SparshRoad'
import YashdeepRoad from './components/Seniors/Yashdeep/YashdeepRoad'
import HappyRoad from './components/Seniors/Happy/HappyRoad'
import Landing from './components/LandingPage/Landing';
import HomePage from './components/HomePage/HomePage';
import "./App.css";
import SimpleReactLightbox from 'simple-react-lightbox'

function App() {
  return (
    <BrowserRouter>
      {/* basename={window.location.pathname || ''} */}
      <SimpleReactLightbox>
        <div className="App">
          {/* <Layout /> */}
          <Switch>
            <Route path='/Nirav' component={() => <Layout tag={<NiravRoad />} />} />
            <Route path='/Sparsh' component={() => <Layout tag={<SparshRoad />} />} />
            <Route path='/Abhijeet' component={() => <Layout tag={<AbhijeetRoad />} />} />
            <Route path='/Atmadeep' component={() => <Layout tag={<AtmadeepRoad />} />} />
            <Route path='/Happy' component={() => <Layout tag={<HappyRoad />} />} />
            <Route path='/Vishnupriya' component={() => <Layout tag={<VishnupriyaRoad />} />} />
            <Route path='/Yash' component={() => <Layout tag={<YashRoad />} />} />
            <Route path='/Rahil' component={() => <Layout tag={<RahilRoad />} />} />
            <Route path='/Ayush' component={() => <Layout tag={<AyushRoad />} />} />
            <Route path='/Nikhil' component={() => <Layout tag={<NikhilRoad />} />} />
            <Route path='/Yash' component={() => <Layout tag={<YashRoad />} />} />
            <Route path='/Yashdeep' component={() => <Layout tag={<YashdeepRoad />} />} />
            <Route path='/Farewell-2021' exact component={() => <Layout tag={<Landing />} />} />
            <Route path='/' exact component={() => <Layout tag={<HomePage />} />} />
          </Switch>

        </div>
      </SimpleReactLightbox>
    </BrowserRouter>

  );
}

export default App;
