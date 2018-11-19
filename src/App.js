// @flow

import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Users from './components/Users'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <CssBaseline />
          <Header />
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userId" component={User} />
          <Footer />
        </Fragment> 
      </BrowserRouter>
    )
  }
}
export default App;
