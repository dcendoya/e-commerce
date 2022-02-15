import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min';
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase/firebase";
import Loading from "./loading/Loading";

export default function Catalogo () {

    const { catalogoId } = useParams();
    const [loading, setLoading] = useState(true)
    const [categorias, setCategorias] = useState ([]);

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("items").where('categoria', '==', catalogoId);
        itemCollection.get()
            .then((querySnapShot) => {
                if (querySnapShot.size == 0) {
                    console.log("no hay items para mostrar");
                    return
                }
                console.log("hay documentos");
                setCategorias(querySnapShot.docs.map((doc)=> {
                    return {id: doc.id, ...doc.data()}
                }
                ));
            })
            .catch((err)=> {
                console.log(err);
            })
            .finally(() => { setLoading(false) })
    }, [catalogoId])

    return (
        <>
            <div>
                <p>Mirá todas las prendas del catálogo {catalogoId}</p>
            </div>
            
            { (loading) ?
                ( <Loading />)
                :
                (<>
                    {categorias.map(item => (
                        <div style={{marginBottom: "80px", width: "fit-content", padding: "30px", borderRadius: "30px", boxShadow: "rgb(0 0 0 / 16%) 0px 10px 36px 0px, rgb(0 0 0 / 6%) 0px 0px 0px 1px"}}>
                        <div><img src={item.url} style={{width: "200px"}}/></div>
                        <p style={{textTransform: "capitalize", fontWeight: "bold", fontSize: "18px"}}>{item.title} color {item.color}</p>
                        <p style={{textTransform: "capitalize", fontSize: "18px"}}>${item.price}</p>
                        <Link to={`/item/${item.id}`} style={{borderStyle: "none", borderRadius: "30px", backgroundColor: "#c6c6c6", padding: "8px", color: "#000000", textTransform: "uppercase", textDecoration: "none", fontWeight: "bold", fontSize: "8.5px"}}>Ver detalle</Link>
                        </div>
                    ))}
                </>)
            }
        </>
    )

}