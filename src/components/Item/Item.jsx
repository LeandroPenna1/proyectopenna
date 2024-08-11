import { Link } from "react-router-dom"
import "./Item.css"
const Item = ({ id, name, img, category, price }) => {
    return (
        <div className="product-item">
            <article>
                <h1>{name}</h1>
                <img src={img} alt={name} />
                <p>Category: {category}</p>
                <h2>${price}</h2>
                <button type="button">
                    <Link to={`/detail/${id}`}>Ver Detalles</Link>
                </button>
            </article>
        </div>
    )
}

export default Item