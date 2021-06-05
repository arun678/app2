import React from 'react'

function ValidationComponent(props) {
    return (
        <div>
            {props.textLength<5 &&  "Text too short"}
            {props.textLength>10 &&  "Text too long"}
        </div>
    )
}

export default ValidationComponent
