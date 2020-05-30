import React from 'react'

const Scroll  = ( props ) => {
    return(
        <div
            style = { { overflowY : 'scroll' , height : '350px' } }>
            { props.children }
        </div>
    ) ;
}

export default Scroll
