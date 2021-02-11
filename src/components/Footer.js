import React from 'react'

const Footer = (props) => {
    return (
        <div className="footer-grid">
            <div className="footer-item f1">
            </div>
            <div className="footer-item f2">
                Version {props.version}
            </div>
            <div className="footer-item f3">
            </div>
        </div>
    )
    
}

export default Footer