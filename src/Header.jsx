import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
        return(
            <>
            <div className="container">
                <div className="header_background">
                    <ul className="me-auto">
                       <li>
                            <NavLink to="#" id="tanzil" >TANZIL.net</NavLink>
                        </li> 
                    </ul>
                </div>
            </div>
            </>
        );
};

export default Header;