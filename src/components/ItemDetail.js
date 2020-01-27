import React from 'react';
import {Link} from 'react-router-dom'

const ItemDetail=(props)=>{
    console.log(props)
    const matchID = props.object.filter(item => props.objectDetail === item.id)
    console.log(matchID)
    return(
        <div>{matchID.map(item=>{
            return(
            <React.Fragment key={item.id}>
                <h2>{item.objeto}</h2>
                <span> Va al contenedor: {item.contenedor}</span>
                <Link to="/home">Volver a Buscar</Link>
            </React.Fragment>
            )
        })}  
        </div>
    )
}



export default ItemDetail;