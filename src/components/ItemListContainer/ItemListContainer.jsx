//import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import "./itemListContainer.css"
const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    useEffect(() => {
    const collectionRef = categoryId
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products")

    getDocs(collectionRef)
    .then((querySnapshot)=> {
        const products = querySnapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        })
        setProducts(products)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(()=> {
        setLoading(false);
    })
}, [categoryId])

/*         const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = category ? await getProductsByCategory(category) : await getProducts();
                setProducts(res);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]
 
});

    if (loading) {
        return <h1 style={{textAlign:"center"}}>CARGANDO PRODUCTOS</h1>;
    }*/

    return (
        <div className="item-list-container">
            <h2 className="item-list-title">Bienvenido a FutShop</h2>
            <h1 className="item-list-greeting">{greetings}</h1>
            <p className="item-list-description">Explora nuestra colección de ropa de fútbol: camisetas retro, shorts, guantes y más.</p>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;