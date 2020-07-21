import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Footer from './components/Footer/Footer'
import background from './images/background.jpg';

function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat' }}>
        <Header />
        <HomeScreen />
        <Footer/>
      </div>
    </>
  );
}

export default App;
