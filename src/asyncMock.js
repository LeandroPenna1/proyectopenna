const products = [
    {
        id: 1,
        name: "botines predator",
        price: 150000,
        category: "botines",
        img: "https://http2.mlstatic.com/D_NQ_NP_696020-MLC48231584735_112021-O.webp",
        stock: 12,
        description: "Botines blancos con detalles rosa"
    },
    {
        id: 2,
        name: "camiseta francia",
        price: 100000,
        category: "camisetas",
        img: "https://acdn.mitiendanube.com/stores/002/872/034/products/fdcca0511-0c4787ced8257cb43f16776227338445-1024-1024.jpg",
        stock: 8,
        description: "Camiseta retro Francia 98"
    },
    {
        id: 3,
        name: "botines mercurial",
        price: 175000,
        category: "botines",
        img: "https://i.pinimg.com/736x/63/e0/a5/63e0a57a47ce52f52604ec6d9cf8b5c2.jpg",
        stock: 10,
        description: "Botines negros con detalles dorados"
    },
    {
        id: 4,
        name: "camiseta argentina",
        price: 120000,
        category: "camisetas",
        img: "https://retrocampeones.com/cdn/shop/files/424e0571.jpg?v=1712257761&width=1946",
        stock: 15,
        description: "Camiseta retro Argentina 86"
    },
    {
        id: 5,
        name: "balón oficial",
        price: 50000,
        category: "balon",
        img: "https://robbreport.mx/wp-content/uploads/2022/04/0206a794e7ca4cf0ac5bae6301079fec-9366.jpg",
        stock: 20,
        description: "Balón oficial de la Copa del Mundo 2022"
    },
    {
        id: 6,
        name: "camiseta barcelona",
        price: 110000,
        category: "camisetas",
        img: "https://acdn.mitiendanube.com/stores/004/269/759/products/sup-92-95-retro-1-ae35621f104126bee717075571125127-480-0.jpg",
        stock: 10,
        description: "Camiseta retro Barcelona 92"
    },
    {
        id: 7,
        name: "botines phantom",
        price: 160000,
        category: "botines",
        img: "https://i.ebayimg.com/thumbs/images/g/73EAAOSwZpBmEJu3/s-l1200.jpg",
        stock: 7,
        description: "Botines rojos con detalles negros"
    },
    {
        id: 8,
        name: "camiseta brasil",
        price: 95000,
        category: "camisetas",
        img: "https://acdn.mitiendanube.com/stores/002/042/897/products/g-brasil-701-636cb03822370f0caa16776425858970-640-0.jpg",
        stock: 12,
        description: "Camiseta retro Brasil 70"
    },
    {
        id: 9,
        name: "guantes arquero",
        price: 70000,
        category: "guantes",
        img: "https://http2.mlstatic.com/D_NQ_NP_912879-MLA31381201814_072019-O.webp",
        stock: 25,
        description: "Guantes de arquero profesionales"
    },
    {
        id: 10,
        name: "shorts entrenamiento",
        price: 35000,
        category: "shorts",
        img: "https://img.kwcdn.com/product/fancy/e48c1fa7-427b-4f96-a847-e06bb113461c.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        stock: 30,
        description: "Shorts de entrenamiento ligeros"
    }
];


export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(products)
        }, 2500)
    } )
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products.filter((prod) => prod.category === categoryId))
        }, 1000);
    });
};

export const getProductsById = (productoId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productoId))
        }, 1000);
    });
};