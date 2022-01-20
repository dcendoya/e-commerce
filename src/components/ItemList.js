import React, {useState, useEffect} from "react";
import Item from "./Item";

export default function ItemList () {
    
    const [initialPromise, setInitialPromise] = useState(false);

    const [listaProductos, setListaProductos] = useState([]);

    const stockProductos = new Promise ((resolve, reject) => {

        setTimeout(() => {
            resolve([
                {id: '01', title: 'remera', description: 'remera manga corta de color blanco', price:1000, url:'#', stock: 6},
                {id: '02', title: 'top', description: 'top con brillos color negro', price: 1500, url:'#', stock: 4},
                {id: '03', title: 'musculosa', description: 'musculosa deportiva color verde', price: 2000, url:'#', stock: 2}   
            ])
        }, 2000)
    });
    

    useEffect(() => {
        stockProductos
            .then(res => {
                setInitialPromise (true);
                setListaProductos(res);
            })
            .catch (err => {
                setInitialPromise (true);
                console.log(err);
            });

    })
   
    return (
        <>
            {(initialPromise) ?
                <>
                    {listaProductos.map(item => <Item item={item}/>)}
                </>
            

            :

            <>
                <p>Cargando productos. Esperá unos segundos.</p>
            </>
            }
        
        </>
    )
}