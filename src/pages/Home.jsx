import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header/Header';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import background from '../images/background.jpg';
import config from '../resources/menuItems.json'

function Home() {
  document.body.classList.add('overflow-hidden')

  console.log(config[0].name);

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'fixed',  backgroundPosition: 'center' }}>
      <Header />
      <HomeScreen />
    </div>
  );
}

export default Home;
