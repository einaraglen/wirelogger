import React from 'react'
import Slider from 'bizcharts-plugin-slider';

const BarSlider = (props) => {
    function handleSliderChange(e) {
        let start = Math.floor(e.startValue)
        let end = Math.floor(e.endValue)
        props.updateScale(start, end)
    }

    return (
       <Slider 
       height={80}
        data={props.data} 
        xAxis="x" 
        yAxis="y"
        onChange={handleSliderChange}
       />
    )
}

export default BarSlider