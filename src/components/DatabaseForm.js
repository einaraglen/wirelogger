import React, { useState } from 'react'

const DatabaseForm = () => {

    const[rate, setRate] = useState(1)
    const[host, setHost] = useState("1.0.1.20")
    const[name, setName] = useState("Winch1_Wire285_WCL")

    return(
        <div className="form">
            <div className="form-header">
                Database Settings
            </div>
            <div className="inf">
                Refresh interval
            </div>
            <div>
                <input className="field" type="number" value={rate} onChange={event => setRate(event.target.value)} />
            </div>
            <div className="inf">
                Host
            </div>
            <div>
                <input className="field" type="text" value={host} onChange={event => setHost(event.target.value)} />
            </div>
            <div className="inf">
                Database Name
            </div>
            <div>
                <input className="field" type="text" value={name} onChange={event => setName(event.target.value)} />
            </div>
        </div>
    )
}

export default DatabaseForm