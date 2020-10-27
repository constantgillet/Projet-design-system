import React, { Component, useState } from 'react'
import { Route, Switch, Router } from 'react-router-dom'

import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ResetPasswordPage from '../pages/ForgotPasswordPage/ResetPasswordPage';

function App(props) {

  return (
      <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route path='/register' component={RegisterPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/reset-password' component={ResetPasswordPage}/>
      </Switch>
  );
}

export default App;