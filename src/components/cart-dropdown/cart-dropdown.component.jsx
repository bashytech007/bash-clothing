import { useSelector } from 'react-redux'
import Button from '../button/Button.component'
import {CartDropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles.jsx'
import CartItem from '../cart-item/Cartitem.component'
import { selectCartItems } from '../../store/cart/cart.selector'
import {useNavigate} from 'react-router-dom'
// import { CategoriesContext } from '../../contexts/categories.context';
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;