function Producto(props) {
    return (
        <div className="product">
            <h3>{props.nombre}</h3>
            <img src={props.imagen} style={{ height: "250px" }} />
            <p>{props.precio}</p>
            <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary" type="button">
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Producto;