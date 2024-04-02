import { useContext } from "react";
import { CartContext } from "../utils/context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.images[product.images.length - 1]} alt="" />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;
