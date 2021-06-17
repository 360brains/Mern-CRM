import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from "react-router-dom";

const UsersList = lazy(() => import("../components/User/UsersList"));

const UserRoutes = () => {
    return (
        <>
            <Suspense>
                fallback={
                    <div className='' />
                }
                <Switch>
                    <Route path="/user/list">
                        <UsersList />
                    </Route>
                    <Redirect to="/error" />
                </Switch>
            </Suspense>
        </>
    )
}

export default UserRoutes
