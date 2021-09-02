import React from 'react';

const ItemsList=(props)=>
{
    
    return (
        <>
        <div className='todo_style'>
        <i className="fa fa-times" aria-hidden="true" onClick={()=>{
            props.onSelect(props.id);
        }}></i>
        <li>{props.text}</li>
        </div>
        </>
        );
}

export default ItemsList;