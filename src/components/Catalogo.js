import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import ItemDetail from "./ItemDetail";

export default function Catalogo () {

    const { catalogoId } = useParams();

    const [categorias, setCategorias] = useState ([]);

    useEffect(()=> {
        setTimeout(()=>{
            const listaProductos = [{id: '01', title: 'remera', color:'blanco', description: 'Remera manga corta de algodón con cuello redondo', price:1000, stock: 6, categoria: 'tops', url:'https://i.pinimg.com/736x/2b/e7/2d/2be72d1509c5842b671ac12c450f5e62.jpg'},
                                    {id: '02', title: 'top', color:'negro', description: 'Top de lentejuelas y encaje, con breteles de tira', price: 1500, stock: 4, categoria: 'tops', url:'https://stylelovely.com/wp-content/uploads/Top-lentejuelas-negro-El-corte-ingles.jpg'},
                                    {id: '03', title: 'musculosa', color:'verde', description: 'Musculosa deportiva entallada con cortes a los costados', price: 2000, stock: 2, categoria: 'tops', url:'https://www.vandalia.com.ar/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/8/3/8378_verde_.jpg'},   
                                    {id: '04', title: 'short', color:'azul', description: 'Short de jean tiro alto, color azul claro', price:1000, stock: 8, categoria: 'bottoms', url:'https://img.ltwebstatic.com/images3_pi/2021/04/30/1619749682cf17cd979701403a629b42c953eca4c2_thumbnail_405x552.webp'},
                                    {id: '05', title: 'pollera', color:'azul y blanco', description: 'Pollera con estampa floreada, tiro alto', price:1000, stock: 5, categoria: 'bottoms', url:'https://http2.mlstatic.com/D_NQ_NP_765525-MLM43778004389_102020-O.jpg'},
                                    {id: '06', title: 'pantalón', color:'verde', description: 'Pantalón de gabardina tiro alto con lazo en la cintura', price:1000, stock: 3, categoria: 'bottoms', url:'https://falabella.scene7.com/is/image/FalabellaCO/881576713_1'}
                            ];
            
            setCategorias(listaProductos.filter(item => item.categoria == catalogoId));
        }, 2000)
    }, [catalogoId])

    return (
        <>
            <div>
                <p>Mirá todas las prendas del catálogo {catalogoId}</p>
            </div>
            {categorias.map(item => (
                <div style={{marginBottom: "80px", width: "fit-content", padding: "30px", borderRadius: "30px", boxShadow: "rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px"}}>
                <div><img src={item.url} style={{width: "200px"}}/></div>
                <p style={{textTransform: "capitalize", fontWeight: "bold", fontSize: "18px"}}>{item.title} color {item.color}</p>
                
                <p style={{textTransform: "capitalize", fontSize: "18px"}}>${item.price}</p>
                <Link to={`/item/${item.id}`} style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#c6c6c6", padding: "8px", color: "#000000", textTransform: "uppercase", textDecoration: "none", fontWeight: "bold", fontSize: "8.5px"}}>Ver detalle</Link>
                </div>
            ))}
        </>
    )

}