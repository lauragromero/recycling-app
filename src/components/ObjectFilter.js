import React from 'react';
import Item from './Item';
import {Link} from 'react-router-dom'



const ObjectFilter=(props)=>{
    console.log(props)
    console.log(props.dataObjects)
    let value = props.searchValue.toLowerCase();
    return(
        <ul>
            {props.dataObjects.filter(item=> item.objeto.toLowerCase().includes(value))
            .map(item=> value === ''? null:  <Link key={item.id} to={`/detail/${item.id}`}><Item  name={item.objeto}/></Link>)}
        </ul>
    )
}


export default ObjectFilter;