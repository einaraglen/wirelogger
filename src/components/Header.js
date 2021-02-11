import React from 'react'
import { Link } from 'react-router-dom'

import settings from '../imgs/settings.png'

const Header = () => {
    return (
        <div className="header-grid">
            <div className="header-item h1">
            </div>
            <div className="header-item h2">
            </div>
            <div className="header-item h3">
                <Link to='/settings'>
                    <img src={settings} alt="Settings" className="settings-img"></img>
                </Link>
            </div>
        </div>
    )
}

export default Header