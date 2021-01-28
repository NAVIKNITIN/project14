import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () =>{
    return (
        <nav className="navbar navbar-expand-sm bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/home" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/shopping"  >Shopping</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/help" >Help</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/admin" >Admin</Link>
                </li> 
    
            </ul>

        </nav>
    )
};
export default Navigation;
