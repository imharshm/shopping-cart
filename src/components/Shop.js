import { useState, useEffect } from "react";
import Product from "./Product";
import Cart from "./Cart";
import { PRODUCT_URL } from "../utils/constants";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch(PRODUCT_URL);
    const json = await data.json();
    setProducts(json.products);
  };

  return (
    <section className="main-section">
      <div className="product-section">
        {products?.map((product) => {
          return <Product key={product?.id} product={product} />;
        })}
      </div>
      <Cart />
    </section>
  );
};
export default Shop;
