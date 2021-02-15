import React from 'react'

import BarChart from './BarChart'
import ScaleSlider from './ScaleSlider'
import SlideChart from './SlideChart'

const Charts = (props) => {
    const chartRef = React.useRef();

    function updateScale(min, max) {
        chartRef.current.updateScale(min, max)
    }

    return (
        <>
            <div className="m1-1">
                <div className="live-grid">
                    <div className="live-item l1">
                        <BarChart ref={chartRef} data={props.dataset}/>
                    </div>
                    <div className="live-item l2">
                        <div className="slider" id="track">
                            <ScaleSlider updateScale={updateScale} />
                        </div>
                    <div className="line">
                        <SlideChart data={props.dataset}/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="m1-2">
                <div className="bottom-box">
                    <div className="bottom-item b1">
                    </div>
                    <div className="bottom-item b2">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Charts