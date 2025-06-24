import React, { useEffect, useState } from 'react'
import {getOneProduct, getProducts} from '../mock/Asynmock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detail, setDetail] =useState ({})

    useEffect(()=>{
        getOneProduct('03')
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
    },[])

  return (
    <div>
      <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer
