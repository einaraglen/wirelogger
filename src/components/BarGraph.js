import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Chart, Geom, useTheme, registerTheme, getTheme, Tooltip, Axis } from 'bizcharts';
import Slider from 'bizcharts-plugin-slider';

const BarGraph = forwardRef((props, ref) => {
  const [scale, setScale] = useState({
    x: {
      min: 100,
      max: 1000
    }
  })

  useImperativeHandle(
    ref, () => ({
      updateScale(xMin, xMax) {
        setScale({
          x: {
            min: xMin,
            max: xMax
          }
        })
      }
    })
  )

  return (
    <Chart  scale={scale} data={props.data} animate={false} forceFit >
      <Tooltip />
      <Axis />
      <Geom type="interval" position="x*y" color="#e50000" size={4}/>
    </Chart>
  )
})

export default BarGraph