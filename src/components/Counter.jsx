import { useState } from "react";

function Counter() {
    const [contador, setContador] = useState(0)
    return (
        <div>
        <h1>Contador: {contador}</h1>
        <button onClick={() => {setContador(contador + 1)}}> + </button>
        </div>
    )
}

export default Counter;