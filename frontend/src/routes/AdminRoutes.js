import React,{lazy} from 'react';
import {Route , Redirect} from 'react-router-dom';
import {getLocalStorage} from '../helpers/localStorage';
const Footer = lazy(() => import("../components/footer/Footer"));
const Sidebar = lazy(() => import("../components/sidebar/Sidebar"));
const Header = lazy(() => import("../components/header/Header"));

const AdminRoute = ({component: Component , ...rest }) => {
    return (
        <Route
            {...rest}
            render = {(props) => 
               {
                 if(getLocalStorage() && getLocalStorage().role !== ""){
            return   ( <> <Header /> <Sidebar /> <Component {...props} /> <Footer /> </> )
                 }else{
                   return  <Redirect to="/"/>
                 }
               }
            }
            />

    )
}

export default AdminRoute
