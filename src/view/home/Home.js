import React, { useEffect, useState } from "react";
import "../home/Home.css";
import SideNav from "../../components/layouts/SideNav";
import { HOME } from "../../resources/constants/strings/string";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productsData = await response.json();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <SideNav CurrentComponent={HOME}>
      <div className="product-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                  width="150"
                  height="150"
                />
              </div>
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </SideNav>
  );
}
