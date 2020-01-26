import React from 'react';
import Item from './Item';



const ObjectFilter=(props)=>{
    console.log(props)
    console.log(props.dataObjects)
    let value = props.searchValue.toLowerCase();
    return(
        <ul>
            {props.dataObjects.filter(item=> item.objeto.toLowerCase().includes(value))
            .map(item=> value === ''? null: <Item key={item.id} name={item.objeto}/>)}
        </ul>
    )
}


export default ObjectFilter;