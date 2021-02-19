import React, {useEffect, useState} from 'react'
import { useHistory, Link } from 'react-router-dom'

import ColorForm from './ColorForm'
import LimitForm from './LimitForm'
import DatabaseForm from './DatabaseForm'

const Settings = () => {

    function networkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000))
    }

    const [isLoading, setLoading] = useState(false)
    let history = useHistory()                

    useEffect(() => {
        if (isLoading) {
            networkRequest().then(() => {
                setLoading(false)
                history.push('/')
            })
        }   
    }, [isLoading, history])
      
    const handleClick = () => setLoading(true)

    return (
        <div className="settings-grid">
            <ColorForm className="color-form" />
            <LimitForm className="limit-form" />
            <DatabaseForm className="data-form" />
            <div className="buttons">
            <button className="s-button" onClick={!isLoading ? handleClick : null}>{isLoading ? 'Loading…' : 'Save'}</button>
            <Link to='/'>
                <button className="s-button">Back</button>
            </Link>
            </div>
        </div>
    )
}

export default Settings