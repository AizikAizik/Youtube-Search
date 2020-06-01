import React from 'react'

const Scroll  = ( props ) => {
    return(
        <div
            style = { { overflowY : 'scroll' , minHeight : '280px' } }>
            { props.children }
        </div>
    ) ;
}

export default Scroll
