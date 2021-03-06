import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'

const ScaleSlider = (props) => {
    let slider = React.createRef(null) //makes draggable not go boom boom
    const [position, setPosition] = useState({x: 0})
    const [bounds, setBounds] = useState({ 
        left: 0,
        right: 0 
    })

    const trackPos = (data) => {
        let scale = 3000 / document.getElementById('track').clientWidth

        setPosition({x: Math.round(data.x * scale)})
        setBounds({ 
            left: 0,
            right: document.getElementById('track').getBoundingClientRect().right - document.getElementById('item').clientWidth
        })

        let start = Math.round(data.x * scale)
        let end = start + Math.round(scale * document.getElementById('item').clientWidth)

        props.updateScale(start, end)
    }

    return (
            <Draggable 
                nodeRef={slider} 
                axis="x" 
                onDrag={(e, data) => trackPos(data)}
                bounds={bounds}
                handle=".handle" >
                <div  ref={slider} id="item">
                    <div className="handle"></div>
                </div>
            </Draggable>
    )
}

export default ScaleSlider