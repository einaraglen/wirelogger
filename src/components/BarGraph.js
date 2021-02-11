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
            color={['versionName', ['#79D1ED', '#FFA66B', 'rgba(0, 0, 0, 0)']]}
          />
    </Chart>
  )
})

export default BarGraph