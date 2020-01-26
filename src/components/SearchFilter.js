import React from 'react';

const SearchFilter=(props)=>{
    console.log(props)

 const getInputValue=(e)=>{
     props.getInputValue(e.target.value)
 }
    return(
        <form>
            <label htmlFor="objectName">Introduce objeto</label>
            <input onChange={getInputValue} type="search" name="objectName" value={props.value}/>
        </form>
    )
}


export default SearchFilter;