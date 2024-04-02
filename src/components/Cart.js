import { useContext } from "react";
import { CartContext } from "../utils/context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, clearItemFromCart } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-section">
      <div className="cart-title">
        <h3>Cart</h3>
        {cartItems.length > 0 && <button onClick={() => clearCart()}>Clear Cart</button>}
      </div>
      {cartItems.map((item) => {
        return (
          <div className="cart-item-box" key={item.id}>
            <img src={item.images[item.images.length - 1]} alt="" />
            <div className="item-info">
              <div>
                <h5>{item.title}</h5>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
              </div>
              {item.quantity > 1 && (
                <button onClick={() => removeFromCart(item)}>Remove Qty</button>
              )}
              <button onClick={() => clearItemFromCart(item)}>Remove Item</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
