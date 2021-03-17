import React from 'react';
import About from './About';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
        return(
            <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_ul">
                            <li className="nav-item">
                                <NavLink className="link active" aria-current="page" to="#">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="link" to="#">News</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="link" to="#">Docs</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav_ul">
                            <li className="nav-item">
                                <NavLink className="link" aria-current="page" to="#">FAQs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="link" to="#">Contact</NavLink>
                            </li>
                        </ul>
      
                    </div>
                    </div>
                </nav>
            </div>
            </>
        );
};

export default Navbar;