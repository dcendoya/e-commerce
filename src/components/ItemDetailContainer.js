import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {

    const [starterPromise, setStarterPromise] = useState(false);

    const [listaProductosDetail, setListaProductosDetail] = useState([]);

    const productosDetail = new Promise ((resolve, reject) => {

        setTimeout(() => {
            resolve([
                {id: '01', title: 'remera', color:'blanco', description: 'Remera manga corta de algodón con cuello redondo', price:1000, stock: 6, url:'https://i.pinimg.com/736x/2b/e7/2d/2be72d1509c5842b671ac12c450f5e62.jpg'},
                {id: '02', title: 'top', color:'negro', description: 'Top de lentejuelas y encaje, con breteles de tira', price: 1500, stock: 4, url:'https://stylelovely.com/wp-content/uploads/Top-lentejuelas-negro-El-corte-ingles.jpg'},
                {id: '03', title: 'musculosa', color:'verde', description: 'Musculosa deportiva entallada con cortes a los costados', price: 2000, stock: 2, url:'https://www.vandalia.com.ar/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/8/3/8378_verde_.jpg'}   
            ])
        }, 2000)
    });
    

    useEffect(() => {
        productosDetail
            .then(res => {
                setStarterPromise (true);
                setListaProductosDetail(res);
            })
            .catch (err => {
                setStarterPromise (true);
                console.log(err);
            });

    })
    
    return (
        <>
            <div><ItemDetail starterPromise={starterPromise} listaProductosDetail={listaProductosDetail} /></div>
        </>
    )
}