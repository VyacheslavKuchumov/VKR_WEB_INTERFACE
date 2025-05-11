import React, { Component } from 'react';
import './Main.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Aut from './pages/Aut';
import Reg from './pages/Reg';
import Free_analytics from './pages/Free_analytics';
import MainAut from './pages/MainAut';
import MainAutCard1 from './pages/MainAutCard1';
import HomePageAut from './pages/HomePageAut';
import Sphere_card from './components/Sphere_card'
import Sphere from './pages/Sphere';
import Slider_free from './components/Slider_free';
import Slider from './components/Slider';
import Free_param from './components/Free_param';
import Direction from './pages/Direction';
import Contacts from './pages/Contacts';
import About from './pages/About';
import LK from './pages/LK';
import Report from './pages/Reports';
import { AuthProvider } from './pages/AuthProvider';

class App extends Component {
 
  
  render() {
    return (
        <div id='main'>
      <AuthProvider>
        <BrowserRouter>
          <Routes> 
              <Route path='/' element={<HomePage />} />
              <Route path='/pages/auth' element={<Aut />} />
              <Route path='/pages/reg' element={<Reg />} />
              <Route path='/pages/free_analytics' element={<Free_analytics />} />
              <Route path='/pages/MainAut' element={<MainAut />} />
              <Route path='/pages/MainAutCard1' element={<MainAutCard1 />} />
              <Route path='/pages/Sphere' element={<Sphere />} />
              <Route path='/pages/HomePageAut' element={<HomePageAut />} />
              <Route path='/pages/Direction' element={<Direction />} />
              <Route path='/pages/Contacts' element={<Contacts />} />
              <Route path='/pages/About' element={<About />} />
              <Route path='/pages/LK' element={<LK />} />
              <Route path='/pages/Report' element={<Report />} />
              <Route path='/components/Sphere' element={<Sphere />} />
              <Route path='/components/Slider_free' element={<Slider_free />} />
              <Route path='/components/Slider' element={<Slider />} />
              <Route path='/components/Free_param' element={<Free_param />} />
              <Route path='/components/Sphere_card' element={<Sphere_card />} />
              
          </Routes>
        </BrowserRouter>
        </AuthProvider>
        </div>
    )
  }
}

export default App;

