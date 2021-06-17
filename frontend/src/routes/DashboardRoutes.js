import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route, useRouteMatch } from "react-router-dom";

const DashboardAnalytics = lazy(() => import("../components/DashboardAnalytics"));
const Dashboard = lazy(() => import("../components/dashboards/Dashboard"));


const DashboardRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <div className="dashboard-wrapper">
            <Suspense>
                fallback={
                    <div className='' />
                }
                <Switch>
                    <Route exact path="/app/analytics">
                        <DashboardAnalytics />
                    </Route>
                    <Route exact path="/app/dashboard">
                        <Dashboard />
                    </Route>
                    <Redirect to="/error" />
                </Switch>
            </Suspense>
        </div>
    )
}

export default DashboardRoutes
