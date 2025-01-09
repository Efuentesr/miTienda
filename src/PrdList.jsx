import React, { useState, useEffect } from "react";

const PrdList = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50&sortBy=category,title")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, []);

  return (
    <div className="product-grid">
      <h1>cantidad de productos: {products.length}</h1>

      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.images[0]} alt={product.title} style={{height: "100px"}} />
          <h3>category: {product.category}</h3>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          {/* {setCount(count + 1)} */}
        </div>
      ))}

    </div>
  );
};

export default PrdList;
