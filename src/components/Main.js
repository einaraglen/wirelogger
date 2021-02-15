import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Charts from './Charts'

const Main = () => {
    const values = require('../data/livedata.json')

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
        <Charts dataset={dataset}/> 
    )
}

export default Main