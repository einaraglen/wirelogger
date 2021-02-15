import React from 'react'
import { Bar } from 'react-chartjs-2'

const axes = [{
    gridLines: {
        drawOnChartArea: false,
        drawBorder: false
    },
    ticks: {
        display: false,
        drawBorder: false,
        drawTicks: false,
    },
    pointLabels: {
        display: false
    }
}]

const SlideChart = (props) => {
    return (
        <Bar 
        data={props.data} 
        options={{
            legend: { 
                display: false
            },
            scales: {
                xAxes: axes,
                yAxes: axes
            },
            animation: {
                duration: 0 // general animation time
            },
            hover: {
                animationDuration: 0 // duration of animations when hovering an item
            },
            tooltips: false,
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 0 
        }}
        />
    )
}

export default SlideChart