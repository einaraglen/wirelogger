import React from 'react'
import { Link } from 'react-router-dom'

import SideElement from './SideElement'
import charts from '../imgs/charts.png'
import exceptions from '../imgs/exceptions.png'
import settings from '../imgs/settings.png'

const SideBar = () => {
    return (
        <div className="side">
            <div className="s-item side1">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <SideElement img={charts} name="side-img" id="0" text="Charts"/>
                </Link>
            </div>
            <div className="s-item side2">
                <Link to='/exceptions' style={{ textDecoration: 'none' }}>
                    <SideElement img={exceptions} name="side-img" id="1" text="Exceptions"/>
                </Link>
            </div>
            <div className="s-item side3">
                <Link to='/settings' style={{ textDecoration: 'none' }}>
                    <SideElement img={settings} name="side-img" id="2" text="Settings"/>
                </Link>
            </div>
        </div>
    )
}

export default SideBar