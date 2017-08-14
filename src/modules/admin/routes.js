import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import UsersList from './users-list/UsersList';

export default function AdminRoutes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
         <Route path="/" component={UsersList}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
