import React from 'react'
import BarChart from './BarChart'
import ScaleSlider from './ScaleSlider'
import SlideChart from './SlideChart'

const Main = () => {
    const chartRef = React.useRef();
    const values = require('../data/livedata.json')
    
    function updateScale(min, max) {
        chartRef.current.updateScale(min, max)
    }

    const buildDataset = () => {
        let meters = []
        let value = []
        values.data.forEach((curr) => {
            meters.push(curr.meter)
            value.push(curr.value)
        })
        return {
            labels: meters, //x
            datasets: [{
                data: value,
                backgroundColor: '#3498DB', //y
                fill: true,
                barPercentage: 1,
                categoryPercentage: 1.0,
            }]
        }
    }

    const dataset = buildDataset()

    return (
        <div className="main-grid">
        <div className="main-item m1">
            <div className="live-grid">
                <div className="live-item l1">
                    <BarChart ref={chartRef} data={dataset}/>
                </div>
                <div className="live-item l2">
                    <div className="slider" id="track">
                        <ScaleSlider updateScale={updateScale} />
                    </div>
                    <div className="line">
                        <SlideChart data={dataset}/>
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