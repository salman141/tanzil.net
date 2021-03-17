import React from 'react';
import Header from './Header';
import About from './About';
import Body from './Body';
import Footer from './Footer';
import Navbar from './Navbar';
import {Switch, Route} from 'react-router-dom';

const App = () =>{
  return(
    <>
    <Header />
    <Navbar />
    <Body />
    <Footer />
      <Switch>
        <Route exact path="about/" component={About} />
      </Switch>
    </>
  );

};

export default App;