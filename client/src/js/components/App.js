import React, { Component, useState } from 'react'
import { Route, Switch, Router } from 'react-router-dom'

import { AuthProvider } from "../context/auth";
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

function App(props) {

  return (
    <AuthProvider>
      <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route path='/login' component={LoginPage}/>
      </Switch>
    </AuthProvider>
  );
}

export default App;