import React, { useState } from 'react'

import BarGraph from './BarGraph'
import ScaleSlider from './ScaleSlider'


const Main = () => {
    const chartRef = React.useRef();

    function updateScale(min, max) {
        chartRef.current.updateScale(min, max)
    }

    return (
        <div className="main-grid">
        <div className="main-item m1">
            <div className="live-grid">
                <div className="live-item l1">
                    <p id="text"></p>
                    <BarGraph ref={chartRef} />
                </div>
                <div className="live-item l2">
                    <div className="slider" id="track">
                        <ScaleSlider updateScale={updateScale} />
                    </div>
                    <div className="line">
                    </div>
                </div>                         
            </div>
        </div>
        <div className="main-item m2">
            <div className="bottom-box">
                <div className="bottom-item b1">
                </div>
                <div className="bottom-item b2">
                </div>
            </div>
        </div>
    </div> 
    )
}

export default Main