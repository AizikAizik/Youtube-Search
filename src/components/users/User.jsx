import React from "react"
import "./User.css"

const User = (props) => {

    const highlight = (string) => {
        const re = new RegExp(props.query, "i");
        return string.replace(re,  `<span class="highlight">${props.query}</span>`);
    }

    return (
        <div className="user-container " id={props.cursor === props.index  ? "key-highlight" : null}>
            <h3 className="user-id">{props.id}</h3>
            <h4 className="user-name" id="h5">{ <span dangerouslySetInnerHTML={{__html:highlight(props.name)}} />  }</h4>
            <p className="user-address">{ props.address }</p>
        </div>
    )
}

export default User