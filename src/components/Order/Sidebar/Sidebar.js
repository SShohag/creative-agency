import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import mainLogo from "../../../images/logos/creativeLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faConciergeBell, faShoppingCart, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <img style={{height:"60px"}} src={mainLogo} alt=""/>
            <ul className="list-unstyled">
                <li>
                    <Link to="/order" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/service" className="text-dark">
                        <FontAwesomeIcon icon={faConciergeBell} /> <span>Service List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-dark">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/TotalServiceList" className="text-dark">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Total Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-dark" >
                      <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-dark" >
                      <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;