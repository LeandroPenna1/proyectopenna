import { useState } from "react";

function ItemCount({initialValue=1, stock, onAdd}) {
    const [count, setCount] = useState(initialValue);
    const decrement = () => {
        if (count > 1) {
        setCount(count => count - 1);
    }
    }
    const increment = () => {
        if (count < stock) {
        setCount(count => count + 1);
    }
    }
    return (
        <>
            <h1>{count}</h1>
            <button className="btn btn-primary" type="button" onClick={decrement}>Decremento</button>
            <button className="btn btn-primary" type="button" onClick={()=> onAdd(count) }>Agregar al Carrito</button>
            <button className="btn btn-primary" type="button" onClick={increment}>Incremento</button>
        </>
    )
}

export default ItemCount
