import React from 'react'

const SideElement = (props) => {
    const choices = ["charts", "exceptions", "settings"]

    function divClicked(e) {
        for(let i = 0; i < 3; i++) {
            document.getElementById(i).style.backgroundColor = ""
        }
        document.getElementById(e.target.id).style.backgroundColor = "#1b1e21"
    }
    return (
        <div className="s-element" id={props.id} onClick={divClicked}>
            <img src={props.img} className={props.name} id={props.id} />
            <h3 className="side-text" id={props.id} >{props.text}</h3>
        </div>
    )
}

export default SideElement