import React, {useEffect, useState} from 'react'
import { useHistory, Link } from 'react-router-dom'

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
            <div className="settings-item s1">
            </div>
            <div className="settings-item s2">
            </div>
            <div className="settings-item s3"></div>
            <div className="settings-item s4"></div>
            <div className="settings-item s5"></div>
            <div className="settings-item s6">
            <button className="s-button" onClick={!isLoading ? handleClick : null}>{isLoading ? 'Loading…' : 'Save'}</button>
            <Link to='/'>
                <button className="s-button">Back</button>
            </Link>
            </div>
        </div>
    )
}

export default Settings