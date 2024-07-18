

const ItemDetail = ({name, img, category, stock, description, price}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width: 400}}/>
        <p>Category: {category}</p>
        <p>Stock: {stock}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
    </article>
  )
}

export default ItemDetail