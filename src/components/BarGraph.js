import React, { forwardRef, useImperativeHandle, useState } from 'react'
import {Chart, LineAdvance} from "bizcharts";

const buildData = () => {
  const values = require('../data/livedata.json')
  let data = [{}]
  values.data.forEach((curr) => {
    data.push({x: curr.meter, y: curr.value})
  })

  return data
}

const data = buildData()

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
    <Chart scale={scale} animate={false} height={400} autoFit data={data} >
      <LineAdvance
            position="x*y"
            shape="smooth"
						area
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
          />
    </Chart>
  )
})

export default BarGraph