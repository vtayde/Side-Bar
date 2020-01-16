import React, {Component} from 'react';
import { connect } from 'react-redux';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import { NavLink } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

class layout extends Component {

   render () {
  return (
  <Auxiliary>
  
<div className={classes.layout__sidebar}>

<NavLink to='/' className={classes.sidebar__trigger}>
     <i className="fa fa-bars"></i>
</NavLink>
  <div className={classes.sidebar__nav}>
     <ul>
        <li>
            <NavLink to='/' className={classes.sidebar__nav_link}>
               <i className="fa fa-home"></i><em>Home</em>
            </NavLink>
        </li>
        <li>
            <NavLink to='/cart' className={classes.sidebar__nav_link}>
               <i className="fa fa-user"></i><em>My Profile</em>
            </NavLink>
        </li>
        <li>
           <a className={classes.sidebar__nav_link} href="#0">
              <i className="fa fa-camera"></i><em>Camera</em>
           </a>
        </li>
     </ul>
  </div>
  <div className={classes.TopNavBar}>
      <p className={classes.Title}>PromoSmart</p>
   </div>
</div>
  </Auxiliary>
  );
   }
};
export default layout;