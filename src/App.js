import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Restaurant from './pages/Restaurant';
import ContactUs from './pages/ContactUs';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/menu' component={Menu}/>
        <Route path='/restaurant' component={Restaurant}/>
        <Route path='/contact-us' component={ContactUs}/>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
