import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/Button.component'
import './cart-dropdown.styles.scss'
import Cartitem from '../cart-item/Cartitem.component'
import {useNavigate} from 'react-router-dom'
const CartDropdown=()=>{

const {cartItems}= useContext(CartContext);
const navigate=useNavigate();
const goToCheckoutHandler=()=>{
   navigate('/checkout') 
}
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
              {cartItems.map((item) =>(
              <Cartitem key={item.id} cartitem={item}/>
              ))}
            </div>
<Button onClick={goToCheckoutHandler}>checkout</Button>
        </div>
    )
}

export default CartDropdown;