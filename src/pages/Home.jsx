import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import background from '../images/background.jpg';

function Home() {
  document.body.classList.add('overflow-hidden')

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'fixed' }}>
      <Header />
      <HomeScreen />
    </div>
  );
}

export default Home;
