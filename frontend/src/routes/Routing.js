import React, { lazy, Suspense } from "react";
import { Switch, Redirect, Route, BrowserRouter as Router, } from "react-router-dom";
// import ImageCards from "../components/sidebar/ImageCards";
// import DashboardAnalytics from "../components/DashboardAnalytics";
// import analytics from "../components/sidebar/analytics";



const Signin = lazy(() => import("../views/Signin"));
const Signup = lazy(() => import("../views/Signup"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Sidebar = lazy(() => import("../components/sidebar/Sidebar"));
const Header = lazy(() => import("../components/header/Header"));
const Error = lazy(() => import("../views/Error"));
const Dashboard = lazy(() => import("../components/dashboards/Dashboard"));
const UserRoutes = lazy(() => import("./UserRoutes"));
const DefaultTable =lazy(()=> import("../components/DataTables/DefaultTable"))
const DataForms=lazy(()=> import("../components/DataForms/DataForms"))
const DashboardAnalytics =lazy(()=>import("../components/DashboardAnalytics"))
const ImageCards =lazy(()=> import("../components/sidebar/ImageCards"))
const Edit =lazy(()=> import("../components/DataForms/Edit"))
const UserTable=lazy(()=> import("../components/DataTables/UserTable"))



const Routing = () => {
    return (
        <>
            <Router>
                <Suspense
                    fallback={
                        <div className='' />
                    }
                >
                    
                    <Switch>
                    <Route path='/userTable'>
                        <Header />
                            <Sidebar />
                            <UserTable/>
                            <Footer />
                            
                        </Route>
                    <Route path='/edit'>
                        <Header />
                            <Sidebar />
                            <Edit/>
                            <Footer />
                            
                        </Route>
                        <Route path='/data'>
                        <Header />
                            <Sidebar />
                            <DefaultTable/>
                            <Footer />
                            
                        </Route>
                        <Route path='/application'>
                        <Header />
                            <Sidebar />
                            <ImageCards/>
                            <Footer />
                            
                        </Route>

                        <Route path='/form'>
                        <Header />
                            <Sidebar />
                            <DataForms/>
                            <Footer />
                        </Route>
                        <Route exact path="/">
                            <Signin />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/app">
                            <Header />
                            <Sidebar />
                            <DashboardAnalytics  />
                            <Footer />
                        </Route>
                        <Route path="/user">
                            <Header />
                            <Sidebar />
                            <UserRoutes />
                            <Footer />
                        </Route>
                        <Route path="/error">
                            <Error />
                        </Route>
                        <Redirect to="/error" />
                    </Switch>
                </Suspense>
            </Router>

        </>
    )
}

export default Routing
