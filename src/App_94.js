import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage_94 from './pages/Homepage_94';
import ShopTwo_94 from './pages/ShopTwoPage_94';
import ContactPage_94 from './pages/ContactPage_94';
import SigninPage_94 from './pages/SigninPage_94';
import Header_94 from './components/Header_94';
import './App_94.scss';

function App_94() {
  return (
    <div>
      <Header_94 />
      <Switch>
        <Route exact path='/' component={Homepage_94} />
        <Route exact path='/shop_94' component={ShopTwo_94} />
        <Route exact path='/contact_94' component={ContactPage_94} />
        <Route exact path='/signin_94' component={SigninPage_94} />
      </Switch>
    </div>
  );
}

export default App_94;
