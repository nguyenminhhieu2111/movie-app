import React, { Fragment } from 'react';
import Header from '../layout/Header';
import {Outlet} from "react-router-dom"
import Nav_bar from '../layout/Nav_bar';
const Main = () => {
    return (
        <Fragment>        
            <Header></Header>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Main;