import { useContext } from "react";
import { CartContext } from "../utils/context/CartContext";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Link to={"/product/" + product.id} className="product-card">
      <img src={product.images[product.images.length - 1]} alt="" />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          addToCart(product);
        }}
      >
        Add to cart
      </button>
    </Link>
  );
};

export default Product;
