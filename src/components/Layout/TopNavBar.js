import React from 'react';
import classes from './TopNavBar.css';
import {Row, Col} from 'react-bootstrap'

const topnavbar = () => {
    return (
        <div className={classes.TopNavBar}>
            <p classNAme={classes.Title}>PromoSmart</p>
            <NavLink to='/login' className={classes.Logout}>
               <i className="fa fa-home"></i>
            </NavLink>
        </div>
    );
};
export default topnavbar;