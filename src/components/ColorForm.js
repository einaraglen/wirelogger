import React, { useState } from 'react'

const ColorForm = () => {

    const[color1, setColor1] = useState(["#3498DB"])
    const[color2, setColor2] = useState(["#F39C12"])
    const[color3, setColor3] = useState(["#E74C3C"])
    const[color4, setColor4] = useState(["#2ECC71"])
    

    return (
        <div className="form">
            <div className="form-header">
                Colors
            </div>
            <div className="inf">
                Color 1
            </div>
            <div>
                <input type="color" value={color1} className="field" onChange={event => setColor1(event.target.value)}/>
            </div>
            <div className="inf">
                Color 2
            </div>
            <div>
                <input type="color" value={color2} className="field" onChange={event => setColor2(event.target.value)}/>
            </div>
            <div className="inf">
                Color 3
            </div>
            <div>
                <input type="color" value={color3} className="field" onChange={event => setColor3(event.target.value)}/>
            </div>
            <div className="inf">
                Line Color 1
            </div>
            <div> 
                <input type="color" value={color4} className="field" onChange={event => setColor4(event.target.value)}/>
            </div>
        </div>
    )
}

export default ColorForm