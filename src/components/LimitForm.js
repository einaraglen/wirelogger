import React, { useState } from 'react'

const LimitForm = () => {

    const[bend1, setBend1] = useState(100)
    const[bend2, setBend2] = useState(1000)
    const[percent1, setPercent1] = useState(20)
    const[percent2, setPercent2] = useState(10)

    return(
        <div className="form">
            <div className="form-header">
                Change low limits
            </div>
            <div>
                <input type="number" className="field-left" step="10" value={bend1} onChange={event => setBend1(event.target.value)} />
            </div>
            <div>
                <input type="number" className="field" step="10" value={percent1} onChange={event => setPercent1(event.target.value)}/>
            </div>
            <div className="form-header2">
                Change high limits
            </div>
            <div>
                <input type="number" className="field-left" step="10" value={bend2} onChange={event => setBend2(event.target.value)}/>
            </div>
            <div>
                <input type="number" className="field" step="10" value={percent2} onChange={event => setPercent2(event.target.value)}/>
            </div>
        </div>
    )
}

export default LimitForm