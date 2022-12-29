import { useContext } from "react";
import {ShoppingIcon,ItemCount,CartIconContainer}from "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
const Carticon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default Carticon;
