import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = forwardRef((props, ref) => {
    const [options, setOptions] = useState({
        legend: { 
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    min: 0,
                    max: 290
                }
            }]
        },
        animation: {
            duration: 0 // general animation time
        },
        hover: {
            animationDuration: 0 // duration of animations when hovering an item
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 0 
    })

    useImperativeHandle(
        ref, () => ({
        updateScale(xMin, xMax) {
            setOptions({
                legend: { 
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            min: xMin,
                            max: xMax
                        }
                    }]
                },
                animation: {
                    duration: 0 // general animation time
                },
                hover: {
                    animationDuration: 0 // duration of animations when hovering an item
                },
                responsive: true,
                maintainAspectRatio: false,
                responsiveAnimationDuration: 0 
            })
        }
        })
    )

    return (
        <Bar data={props.data} options={options} />
    )
})

export default BarChart