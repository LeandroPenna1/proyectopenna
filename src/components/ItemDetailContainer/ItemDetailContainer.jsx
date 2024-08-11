import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    useEffect(() => {
        getDoc(doc(db, "products", productId))
          .then((querySnapshot) => {
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(product); 
        })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })   }, [productId])
    return (

        <div className="itemDetailContainer">
           {loading? <h3>Cargando producto...</h3> : <ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer;


