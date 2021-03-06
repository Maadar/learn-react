import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';
import FAQ from '../FAQ/FAQ.js';


const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;