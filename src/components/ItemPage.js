import React from 'react'
import { useParams } from 'react-router-dom'

const ItemPage = () => {
    let {itemId}=useParams();
    console.log(itemId)
  return (
    <div>{
       <h1>{itemId}</h1> 
        
        
        }</div>
  )
}

export default ItemPage