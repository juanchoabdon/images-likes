import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AdminRoutes from './modules/admin/routes';
import UserRoutes from './modules/user/routes';

export default function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
         <Route path="/admin" component={AdminRoutes}></Route>
         <Route path="/" component={UserRoutes}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
