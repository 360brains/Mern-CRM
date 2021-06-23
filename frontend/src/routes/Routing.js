import React, { lazy, Suspense } from "react";
import { Switch, Redirect, Route, BrowserRouter as Router, } from "react-router-dom";


import UserTable from '../components/DataTables/UserTable';
import Edit from '../components/DataForms/Edit';
import ImageCards from "../components/sidebar/ImageCards";
import DashboardAnalytics from "../components/DashboardAnalytics";
import DataForms from "../components/DataForms/DataForms";
import DefaultTable from "../components/DataTables/DefaultTable";



const Signin = lazy(() => import("../views/Signin"));
const Signup = lazy(() => import("../views/Signup"));
const Error = lazy(() => import("../views/Error"));
const AdminRoutes = lazy(() => import('./AdminRoutes'));



const Routing = () => {
    return (
        <>
            <Router>
        <Suspense fallback={<div className="" />}>
          <Switch>
            <Route exact path="/">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <AdminRoutes exact path="/userTable" component={UserTable} />
            <AdminRoutes exact path="/edit/:productId" component={Edit} />
            <AdminRoutes exact path="/data" component={DefaultTable} />
            <AdminRoutes exact path="/form" component={DataForms} />
            <AdminRoutes exact path="/app" component={DashboardAnalytics} />
            <AdminRoutes exact path="/application" component={ImageCards} />
            <Route path="/error">
              <Error />
            </Route>
            <Redirect exact to="/error" />
          </Switch>
        </Suspense>
      </Router>

        </>
    )
}

export default Routing
