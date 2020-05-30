import React from "react"
import "./User.css"

const User = (props) => {
    return (
        <div className="user-container">
            <h3 className="user-id">{props.id}</h3>
            <h5 className="user-name">{ props.name }</h5>
            <p className="user-address">{ props.address }</p>
        </div>
    )
}

export default User