import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';


// https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0
// Functional component without state
interface NavItemProps {
    path: string;
    name: string;
    disabled?: boolean;
}

const NavItem: React.FC<NavItemProps> = (props) => {
    const location = useLocation();
    const pageURI = location.pathname + location.search;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    return (
        <li className={liClassName}>
            <Link to={props.path} className={aClassName}>
                {props.name}
            </Link>
        </li>
    );
};



interface NavDropdownProps {
    name: string;
    children: React.ReactNode;
}

const NavDropdown: React.FC<NavDropdownProps> = (props) => {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const showDropdown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsToggleOn(!isToggleOn);
    };

    const classDropdownMenu = 'dropdown-menu' + (isToggleOn ? ' show' : '')
    return (
        <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdown" type="button" data-bs-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"
               onClick={showDropdown}>
                {props.name}
            </button>
            <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                {props.children}
            </div>
        </li>
    );
};

export const Navbar: React.FC = () => {
    const appName = "Utils";

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{appName}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <NavItem path='/datetool' name="Date Tool" />
                        
                        <NavDropdown name="Converters">
                            <Link className="dropdown-item" to="/base64decoder">Base64 Decoder</Link>
                            <Link className="dropdown-item" to="/converter">Unit Converter</Link>
                        </NavDropdown>

                        <NavDropdown name="Generators">
                            <Link className="dropdown-item" to="/uuid">UUID Generator</Link>
                            <Link className="dropdown-item" to="/generator">Hash Generator</Link>
                        </NavDropdown>

                        <NavDropdown name="Formatters">
                            <Link className="dropdown-item" to="/json">JSON</Link>
                            <Link className="dropdown-item" to="/xml">XML</Link>
                        </NavDropdown>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;