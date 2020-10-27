import React, { Component, useState } from 'react'
import { Route, Switch, Router } from 'react-router-dom'

import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

function App(props) {

  return (
      <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route path='/login' component={LoginPage}/>
      </Switch>
  );
}

export default App;