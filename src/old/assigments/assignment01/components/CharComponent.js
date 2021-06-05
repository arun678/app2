import React from 'react'

function CharComponent(props) {
    return (
        <div onClick={props.deleteChar} style={{display: "inline-block", padding: "16px", textAlign: "center", margin: "16px", border: "1px solid black"}}>
            {props.character}
        </div>
    )
}

export default CharComponent
