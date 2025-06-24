import { useEffect, useState } from "react"
import { getProducts } from "../mock/Asynmock"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    const[data, setData]= useState([])
    useEffect(()=>{
        getProducts()
        .then((respuesta)=> setData(respuesta))
        .catch((error)=> console.log(error))    
        },[])     
return(
        <div>
            <h1>{props.saludo}</h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer