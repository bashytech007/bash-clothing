import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/Button.component'
import {CartDropDownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles.jsx'
import Cartitem from '../cart-item/Cartitem.component'
import {useNavigate} from 'react-router-dom'
const CartDropdown=()=>{

const {cartItems}= useContext(CartContext);
const navigate=useNavigate();
const goToCheckoutHandler=()=>{
   navigate('/checkout') 
}
    return(
        <CartDropDownContainer>
            <CartItems>
                {

                    cartItems.length ?(cartItems.map((item) =>(
              <Cartitem key={item.id} cartitem={item}/>
            ))):(
                <EmptyMessage>Your cart is empty</EmptyMessage>
            )
                
              }
            </CartItems>
<Button onClick={goToCheckoutHandler}>checkout</Button>
        </CartDropDownContainer>
    )
}

export default CartDropdown;