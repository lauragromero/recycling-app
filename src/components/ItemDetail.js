import React from 'react';

const ItemDetail=(props)=>{
    return(
        <div>
            <h2>{props.name}</h2>
            <span>{props.container}</span>
        </div>
    )
}



export default ItemDetail;