import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


// https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0
// Das hier ist eine "functional component" (geht nur, wenn das Objekt keinen state hat)
const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    return (
        <li className={liClassName}>
            <a href={props.path} className={aClassName}>
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>
    );
};



class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }
    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false"
                   onClick={(e) => {this.showDropdown(e)}}>
                    {this.props.name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li>
        )
    }
}

export class Navbar extends React.Component {
    render() {

        const appName = "Utils";
        //const pages = ['dates', 'converter', 'beautifier'];

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">{appName}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <NavItem path="/" name="Home" />
                        <NavItem path="/datetool" name="Dates" />
                        <NavItem path="/base64decoder" name="Base64-Decoder" />
                        <NavItem path="/json" name="JSON" />
                        <NavItem path="/converter" name="Converter" />
                        <NavItem path="/generator" name="Hash Generator" />

                        <NavDropdown name="Dropdown">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="/">Something else here</a>
                        </NavDropdown>


                        {/*<li className="nav-item dropdown">*/}
                            {/*<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                {/*Dropdown*/}
                            {/*</a>*/}
                            {/*<div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                                {/*<a className="dropdown-item" href="/">Action</a>*/}
                                {/*<a className="dropdown-item" href="/">Another action</a>*/}
                                {/*<div className="dropdown-divider"></div>*/}
                                {/*<a className="dropdown-item" href="/">Something else here</a>*/}
                            {/*</div>*/}
                        {/*</li>*/}

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

            </nav>

        )
    };
}

export default Navbar;