import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Slider from './components/Slider';
import Footer from './components/Footer';




function App() {
  return (
    <React.Fragment>
<Home/>
<Navbar/>
<Main/>
<Slider/>
<Footer/>
    </React.Fragment>

  );
}

export default App;
