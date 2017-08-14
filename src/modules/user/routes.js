import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Login from './login/Login';
import Test from './test/Test';
import * as firebase from 'firebase'

export default function UserRoutes() {

 function isAuth() {
     return firebase.auth().currentUser;
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/test" render={() => (
            !isAuth() ? (
              <Redirect to="/"/>
            ) : (
              <Test />
            ))}></Route>
          <Route path="/" component={Login} ></Route>
        </Switch>
      </div> 
    </BrowserRouter>
  )
}
