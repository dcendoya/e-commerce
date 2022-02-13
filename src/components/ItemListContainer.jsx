import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { getFirestore } from "../firebase/firebase";

export default function ItemListContainer ({greeting}) {
    
    const [initialPromise, setInitialPromise] = useState(false);

    const [listaProductos, setListaProductos] = useState([]);

    const stockProductos = new Promise ((resolve, reject) => {

        setTimeout(() => {
            resolve([
                {id: '01', title: 'remera', color:'blanco', description: 'Remera manga corta de algodón con cuello redondo', price:1000, stock: 6, categoria: 'tops', url:'https://i.pinimg.com/736x/2b/e7/2d/2be72d1509c5842b671ac12c450f5e62.jpg'},
                {id: '02', title: 'top', color:'negro', description: 'Top de lentejuelas y encaje, con breteles de tira', price: 1500, stock: 4, categoria: 'tops', url:'https://stylelovely.com/wp-content/uploads/Top-lentejuelas-negro-El-corte-ingles.jpg'},
                {id: '03', title: 'musculosa', color:'verde', description: 'Musculosa deportiva entallada con cortes a los costados', price: 2000, stock: 2, categoria: 'tops', url:'https://www.vandalia.com.ar/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/8/3/8378_verde_.jpg'},   
                {id: '04', title: 'short', color:'azul', description: 'Short de jean tiro alto, color azul claro', price:1000, stock: 8, categoria: 'bottoms', url:'https://img.ltwebstatic.com/images3_pi/2021/04/30/1619749682cf17cd979701403a629b42c953eca4c2_thumbnail_405x552.webp'},
                {id: '05', title: 'pollera', color:'azul y blanco', description: 'Pollera con estampa floreada, tiro alto', price:1000, stock: 5, categoria: 'bottoms', url:'https://http2.mlstatic.com/D_NQ_NP_765525-MLM43778004389_102020-O.jpg'},
                {id: '06', title: 'pantalón', color:'verde', description: 'Pantalón de gabardina tiro alto con lazo en la cintura', price:1000, stock: 3, categoria: 'bottoms', url:'https://falabella.scene7.com/is/image/FalabellaCO/881576713_1'}
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
    
// Get firestore COLLECTION

    // const [items, setItems] = useState({});
    // useEffect(()=>{
    //     const db = getFirestore();
    //     const itemCollection = db.collection("items");
    //     itemCollection.get()
    //         .then((querySnapShot) => {
    //             if (querySnapShot.size == 0) {
    //                 console.log("no hay items para mostrar");
    //                 return
    //             }
    //             console.log("hay documentos");
    //             setItems(querySnapShot.docs.map((doc)=> {
    //                 return {id: doc.id, ...doc.data()}
    //             }
    //             ));
    //             console.log(items);
    //             console.log(querySnapShot.docs.map((doc)=> {
    //                 return {id: doc.id, ...doc.data()}
    //             }
    //             ))
    //         })
    //         .catch((err)=> {
    //             console.log(err);
    //         })
    // }, [])

    return (
        <>
            <div>{greeting}</div>
            <div><ItemList initialPromise={initialPromise} listaProductos={listaProductos} /></div>
        </>
    )
}