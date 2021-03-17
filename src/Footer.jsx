import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
        return(
            <>
            <div className="container bg-light text-center">
                <div className="row border border-dark m-auto">
                    <div className="col-12 border boder-dark pt-3">
                    <NavLink to="#" id="footerid">Tanzil © 2007-2021</NavLink>
            </div>
            </div>
            </div>
            </>
        );
};

export default Footer;