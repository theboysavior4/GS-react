const productos =[
    {
        id: '01',
        name: 'Campera',
        description: 'Campera personalizada a gusto del cliente',
        stock: 50,
        price: 2000,
        category: 'Camperas',
        img: '../campera.jpg'
 
    },
    {
        id: '02',
        name: 'Gorra',
        description: 'Gorra con diseño personalizada a elegir',
        stock: 50,
        price: 1000,
        category: 'Gorras',
        img: '../gorra.jpg'
    },
    {
        id: '03',
        name: 'Chaleco',
        description: 'Chaleco personalizado',
        stock: 50,
        price: 1500,
        category: 'Chalecos',
        img: '../chaleco.jpg'
    },
    {
        id: '04',
        name: 'Zapatillas',
        description: 'Zapas personalizadas a gusto del cliente',
        stock: 20,
        price: 2500,
        category: 'Zapatillas',
        img: '../zapas.jpg'
    },
]

export const getProducts = () =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                resolve(productos)
            }
        },3000)
    })
}
export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error')
            }else{
                let product= productos.find((prod)=> prod.id === id)
                resolve(product)
            }
        },2000 )
    })
}