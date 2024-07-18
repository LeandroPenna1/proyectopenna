import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
function ItemDetailContainer() {
    const [product, setProduct] = useState();
    const {id} = useParams()
    useEffect (() => {
        getProductsById(parseInt(id))
        .then((res) =>{
            setProduct(res)
        })
        .catch((err) =>console.log(err))
    }, [id])
    return (
        
        <div>
         <ItemDetail {...product}></ItemDetail>
            <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary" type="button">
                    Agregar al carrito
                </button>
            </div> 
        </div>
    )
}

export default ItemDetailContainer;