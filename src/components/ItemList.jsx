import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
      {data.map((producto)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList
