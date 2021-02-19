import React, { useEffect } from 'react'

const SideElement = (props) => {

    //shows focus tab after refresh
    //useEffect for applying something after rendering DOM elements
    useEffect(() => {
        let path = window.location.href
        let pathArr = path.split("/")
        let key = pathArr[pathArr.length - 1]

        switch(key) {
            case "settings":
                updateFocus(2)
                break
            case "exceptions":
                updateFocus(1)
                break
            default:
                updateFocus(0)
                break
        }
    })

    const choices = ["charts", "exceptions", "settings"]

    function divClicked(e) {
        updateFocus(e.target.id)
    }

    function updateFocus(index) {
        for(let i = 0; i < 3; i++) {
            document.getElementById(i).style.backgroundColor = ""
        }
        document.getElementById(index).style.backgroundColor = "#1b1e21"
    }

    return (
        <div className="s-element" id={props.id} onClick={divClicked}>
            <img src={props.img} className={props.name} id={props.id} />
            <h3 className="side-text" id={props.id} >{props.text}</h3>
        </div>
    )
}

export default SideElement