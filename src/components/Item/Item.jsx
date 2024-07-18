import { Link } from "react-router-dom"
const Item = ({ id, name, img, category, price }) => {
    return (
        <article>
           
            <h1>{name}</h1>
            <img src={img} style={{ width: 100}} />
            <p>Category: {category} </p>
            <h2>{price} </h2>
            <div className="d-grid gap-2 d-md-block">
           <button className="btn btn-primary" type="button">
           <Link to={`/detail/${id}`}  style={{color:"white"}}> Ver Detalles </Link>
           </button>
           </div>
            
        </article>
    )
}

export default Item