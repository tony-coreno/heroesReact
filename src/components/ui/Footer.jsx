import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info">

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <a 
                        href="https://www.github.com/tony-coreno"
                        // className="nav-item nav-link"
                        className="btn btn-outline-light"  
                        exact
                    >
                        José Antonio Coreño
                    </a>
                </ul>
            </div>
        </nav>
    )
}
 
export default Footer;