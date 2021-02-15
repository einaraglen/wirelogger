import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../imgs/logo.png'

const Header = () => {
    return (
        <div className="header-grid">
            <div className="header-item h1">
                <img src={logo} alt="Settings" className="logo-img"></img>
            </div>
            <div className="header-item h2">
            </div>
            <div className="header-item h3">
            </div>
        </div>
    )
}

export default Header